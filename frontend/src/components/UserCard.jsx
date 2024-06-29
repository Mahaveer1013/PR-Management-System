import { faCheckCircle, faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const UserCard = (props) => {

    return (
        <div className='user-card'>
            <div className="top">
                <div className="left">
                    <img src={props.img} alt='avatar' />
                </div>
                <div className="right">
                    <h3 className='name'>{props.requesterName}</h3>
                    <h5 className='username'>{props.requesterName}</h5>
                </div>
            </div>
            <div className="bottom">
                {
                    props.type === 'pr' &&
                    <>
                        <p className='time-created'>{props.requestedTime}</p>
                        <div className={`pr-status ${props.prStatus === 'Merged' ? 'merged' : props.prStatus === 'Pending' ? 'pending' : props.prStatus === 'Denied' ? 'denied' : ''}`}>
                            {props.prStatus === 'Merged' ? <FontAwesomeIcon icon={faCheckCircle} />
                                : props.prStatus === 'Pending' && <FontAwesomeIcon icon={faClock} />
                            }&nbsp;&nbsp;&nbsp;
                            {props.prStatus}
                        </div>
                        <p>Repo Name: {props.repoName}</p>
                        <p>PR ID: {props.prId}</p>
                        <p>Title:  {props.title}</p>
                        <a href={props.url} className='view-btn'>View Details</a>
                    </>
                }
                {
                    props.type === 'user' &&
                    <>
                        <p className='time-created'>Total no of pull requests: {props.totalPR}</p>
                        <p className='pr-status merged'>Merged pull requests: {props.prMerged}</p>
                        <p className='pr-status pending'>Pending pull requests: {props.prPending}</p>
                        <Link to={props.requesterName} className='view-btn'>View Details</Link>
                    </>
                }
            </div>
        </div>
    )
}

export default UserCard