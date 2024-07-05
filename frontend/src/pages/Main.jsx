import React, { useEffect, useState, createContext } from 'react';
import Header from '../components/Header';
import Home from './Home';
import { Routes, Route, HashRouter, useLocation } from 'react-router-dom';
import '../css/header.css';
import '../css/style.css';
import '../css/dashboard.css';
import '../css/side-bar.css';
import '../css/home.css';
import '../css/leaderboard.css';
import '../css/contact-us.css';
import Leaderboard from './Leaderboard';
import ContactUs from './ContactUs';
import Profile from './Profile';
import Dashboard from './Dashboard';
import Sidebar from '../components/Sidebar';
import StarsCanvas from '../assets/Stars';
import Particle from '../assets/Particle';
import RequireAuth from '../assets/RequireAuth';
import api from '../api';

export const MyContext = createContext()

const Main = () => {

  const [isAside, setIsAside] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);
  const [repoData, setRepoData] = useState([]);
  const [prData, setPrData] = useState([]);
  const [userData, setUserData] = useState(null);
  const url = process.env.REACT_APP_URL

  const fetchPullRequests = async () => {
    setIsLoading(true);
    try {
      const prResponse = await api.get('/api/prData');
      setPrData(prev => (
        [...prev, ...prResponse.data]
      ));
      const repoResponse = await api.get('/api/repoData');
      setRepoData(prev => {
        const existingRepoNames = prev.map(repo => repo.repoName);
        const newData = Array.isArray(repoResponse.data) 
    ? repoResponse.data.filter(repo => !existingRepoNames.includes(repo.repoName))
    : [];

        return [...prev, ...newData];
      });
      console.log(repoData);
      console.log(prData);
      setIsLoading(false);
    } catch (error) {
      console.error("Failed to fetch pull requests:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if(isAuth){
      fetchPullRequests();
    }
  }, [isAuth]);

  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }

  const value = {
    url, repoData, setRepoData, prData, setPrData, isLoading, setIsLoading, isAuth, setIsAuth, userData, setUserData
  }

  return (
    <HashRouter>
      <ScrollToTop />
      <MyContext.Provider value={value}>
        <Header isAside={isAside} setIsAside={setIsAside} />
        <Sidebar isAside={isAside} setIsAside={setIsAside} />
        <div className={'main ' + (isAside && 'blur')}>
          <StarsCanvas />
          <Particle />
          <Routes>
            <Route path='/' element={<Home isAuth={isAuth} />} />
            <Route path='/dashboard' >
              <Route index element={<RequireAuth><Dashboard filter='repo' /></RequireAuth>} />
              <Route path='user' element={<RequireAuth><Dashboard filter='user' /></RequireAuth>} />
            </Route>
            <Route path='/dashboard/:repoName' element={<RequireAuth><Dashboard filter='repo' /></RequireAuth>} />
            <Route path='/dashboard/user/:userName' element={<RequireAuth><Dashboard filter='user' /></RequireAuth>} />
            <Route path='/leaderboard' element={<RequireAuth><Leaderboard /></RequireAuth>} />
            <Route path='/profile/:userName' element={<RequireAuth><Profile /></RequireAuth>} />
            <Route path='/contact-us' element={<ContactUs />} />
            <Route path='*' element={<h1 style={{ width: '100%', height: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Sorry Sapiens, There's no content ahead🙌</h1>} />
          </Routes>
        </div>
      </MyContext.Provider>
    </HashRouter>
  );
}

export default Main;



// <Route path='/' element={<Home />} />
// <Route path='/dashboard' element={<Dashboard />} />  {/* All repos will be shown*/}
// <Route path='/dashboard/:repoName' element={<Dashboard />} /> {/*when i click any specific repo, pull reqs of that repo will be shown*/}
// <Route path='/dashboard/user' element={<UserDets />} /> {/* Display All users only */}
// <Route path='/dashboard/user/:userName' element={<UserDets />} /> {/* when i click specific user, all pull reqs made by him will be shown */}
// <Route path='/leaderboard' element={<Leaderboard />} /> {/* leaderboard */}
// <Route path='/profile' element={<Profile />} /> {/* profile */}
// <Route path='/contact-us' element={<ContactUs />} /> {/* contact-us */}
// <Route path='*' element={<h1 style={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Sorry Sapiend, There's no content ahead🙌</h1>} />
// </Routes>