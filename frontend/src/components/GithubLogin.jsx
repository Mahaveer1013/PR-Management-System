import React, { useEffect, useContext, useState } from 'react';
import { MyContext } from '../pages/Main';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import api from '../api';

const GithubLogin = ({ content }) => {
  const { setUserData, setIsAuth, isLoading, setIsLoading, isAuth } = useContext(MyContext);
  const navigate = useNavigate();

  const fetchData = async () => {
    if (!isAuth) {
      try {
        const response = await api.get('/user');
        setIsAuth(true);
        setUserData(response.data);
        navigate('/');
      } catch (error) {
        console.log("Error fetching user data:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  function redirectToGitHub() {
    const client_id = "Ov23li0ZlRzgtpENXAF1";
    const redirect_uri = "http://localhost:5000/auth/github/callback";
    const scope = "read:user";
    const state = "Secret_State"; // Add state for security
    const authUrl = `https://github.com/login/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope}&state=${state}`;
    window.location.href = authUrl;
  }

  if (isLoading) {
    return <h4>Loading...</h4>;
  }

  return (
    <>
      {isAuth ?
        <div className="login-home">
          <Link to='/dashboard'>
            <FontAwesomeIcon icon={faArrowRight} /> Go To Dashboard
          </Link>
        </div>
        :<div className='login-home' onClick={redirectToGitHub}>
          <FontAwesomeIcon icon={faGithub} /> {content}
        </div>
      }
    </>
  );
}

export default GithubLogin;
