import React from 'react'
import { Link } from 'react-router-dom'

const RepoCard = (props) => {
    return (
        <div className='repo-card'>
            <div className='profile-pic-container'> <img className='profile-pic' src={props.img} alt="" height={40} /><h1 className='repo-name'>{props.repoName}</h1></div>
            <p className='creator-name'>-{props.creatorName}</p>
            <div className="dets">
                <p className='time-created'>Total no of pull requests: {props.totalPR}</p>
                <p className='pr-status merged'>Merged pull requests: {props.PrMerged}</p>
                <p className='pr-status pending'>Pending pull requests: {props.PrPending}</p>
            </div>
            <div className="repo-link">
                <a href={props.url}>View Repository</a> <Link to={props.repoName}>View Contributors</Link>
            </div>
        </div>
    )
}

export default RepoCard