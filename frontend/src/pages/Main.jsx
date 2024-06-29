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
import StarsCanvas from '../components/Stars';
import Particle from '../components/Particle';
import axios from 'axios';
import RequireAuth from '../assets/RequireAuth';

export const MyContext = createContext()

const Main = () => {

  const [isAside, setIsAside] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(true);
  const [repoData, setRepoData] = useState([]);
  const [prData, setPrData] = useState([]);

  const fetchPullRequests = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('https://omanhosting.online/github/pullrequests');
      const repoResponse = await axios.get('https://omanhosting.online/github/repositories');
      setRepoData(repoResponse.data);
      setPrData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Failed to fetch pull requests:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPullRequests();
  }, []);


  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }

  const value = {
    repoData, setRepoData, prData, setPrData, isLoading, setIsLoading, isAuth, setIsAuth
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