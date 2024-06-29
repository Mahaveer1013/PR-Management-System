import { faTimes, faHome, faCodePullRequest, faTrophy, faChartPie, faContactCard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ isAside, setIsAside }) => {

    const handleAside = () => {
        setIsAside(false);
    }

    return (
        <aside className={isAside ? 'open' : 'closed'}>
            <div className="side-bar-close" onClick={handleAside}>
                <FontAwesomeIcon icon={faTimes} className='aside-close' />
            </div>
            <ul className="nav">
                <li onClick={handleAside}><NavLink to='/'><FontAwesomeIcon icon={faHome} />&nbsp;Home</NavLink></li>
                <li onClick={handleAside}><NavLink to='/dashboard'><FontAwesomeIcon icon={faChartPie} />&nbsp;Dashboard</NavLink></li>
                <li onClick={handleAside}><NavLink to='/leaderboard'><FontAwesomeIcon icon={faTrophy} />&nbsp;Leaderboard</NavLink></li>
                <li onClick={handleAside}><NavLink to='/profile/Jane'><FontAwesomeIcon icon={faCodePullRequest} />&nbsp;My Pull Requests</NavLink></li>
                <li onClick={handleAside}><NavLink to='/contact-us'><FontAwesomeIcon icon={faContactCard} />&nbsp;Contact us</NavLink></li>
            </ul>
        </aside>
    );
}

export default Sidebar;
