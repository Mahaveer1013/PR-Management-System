import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/codesapiens.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

const Header = ({isAside, setIsAside}) => {

    const handleAside = () => {
        setIsAside(prev => !prev);
    }

    return (
        <header>
            <Link to='/' className="title">
                <img src={logo} alt={logo} />
                <h1>CODESAPIENS</h1>
            </Link>
            <div className="side-bar-open" onClick={handleAside}>
                {
                    isAside ? <FontAwesomeIcon icon={faTimes} className='aside-open' />
                        :<FontAwesomeIcon icon={faBars} className='aside-open' />
                }
            </div>
        </header>
    )
}

export default Header