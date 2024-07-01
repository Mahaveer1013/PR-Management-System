import React, { useState, useContext } from 'react';
import UserCard from '../components/UserCard';
import { Link, useParams, useLocation } from 'react-router-dom';
import RepoCard from '../components/RepoCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { MyContext } from './Main';

const Dashboard = ({ filter }) => {

  const { repoData, prData, isLoading } = useContext(MyContext)

  // const formatDate = (dateString) => {
  //   const date = new Date(dateString);
  //   const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
  //   return new Intl.DateTimeFormat('en-US', options).format(date);
  // };

  const params = useParams();
  const location = useLocation();

  const repoUsers = params.repoName ? prData.filter(item => item.repoName === params.repoName) : [];
  const userRepos = params.userName ? prData.filter(item => item.requesterName === params.userName) : [];

  const FilteredRepo = () => {
    return (
      <>
        <h3 className='repo-title'>Repository : {params.repoName}</h3>
        {params.repoName && repoUsers.length !== 0 ? (
          <div className="all-repos">
            {repoUsers.map((pr, index) => (
              <UserCard
                key={index}
                type="pr"
                img={'https://github.com/' + pr.requesterName + '.png'}
                repoName={pr.repoName}
                prId={pr.prId}
                title={pr.title}
                requesterName={pr.requesterName}
                requestedTime={pr.requestedTime}
                prStatus={pr.prStatus}
                url = {pr.htmlUrl}
              />
            ))}
          </div>
        ) : (isLoading === false) ? (
            <div className='loading-animation'><h1>No user contributed to this repository</h1></div>
        ) : null
        }
      </>
    );
  };

  const AllRepos = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const handleRepo = (e) => {
      setSearchTerm(e.target.value);
    };

    // Filter aggregated repos based on the search term
    const searchedRepos = repoData && repoData.filter(repo =>
      repo.repoName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <>
        <label htmlFor="repo" className='dashboard-search'>
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" placeholder='Search with repository name' id='repo' onChange={handleRepo} />
        </label>
        {searchedRepos.length !== 0 ?
          (<div className="all-repos">
          {searchedRepos.map((repo, index) => {
            const totalPR = prData.filter(pr => pr.repoName === repo.repoName).length;
            const PrMerged = prData.filter(pr => pr.repoName === repo.repoName && pr.prStatus === 'Merged').length;
            const PrPending = prData.filter(pr => pr.repoName === repo.repoName && pr.prStatus === 'Pending').length;
            return <RepoCard
              key={index}
              img={`https://github.com/${repo.creatorName}.png`}
              repoName={repo.repoName}
              creatorName={repo.creatorName}
              totalPR={totalPR}
              PrMerged={PrMerged}
              PrPending={PrPending}
              url={`https://github.com/${repo.creatorName}/${repo.repoName}`}
            />
          })}
        </div>
        ) : (isLoading === false) ? (
            <div className='loading-animation'><h1>No user contributed to this repository</h1></div>
        ) : null
        }
      </>
    );
  };


  const FilteredUser = () => {
    return (
      <>
        <h3 className='repo-title'>Username : {params.userName}</h3>
        {params.userName && userRepos.length !== 0 ? (
          <div className="all-repos">
            {userRepos.map((pr, index) => (
              <UserCard
                key={index}
                type="pr"
                img={'https://github.com/' + pr.requesterName + '.png'}
                repoName={pr.repoName}
                prId={pr.prId}
                title={pr.title}
                requesterName={pr.requesterName}
                requestedTime={pr.requestedTime}
                prStatus={pr.prStatus}
                url={pr.htmlUrl}
              />
            ))}
          </div>
        ) : (
          null// <h1>This user haven't contributed to any repository</h1>
        )}
      </>
    );
  }

  const UserDets = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const handleUser = (e) => {
      setSearchTerm(e.target.value);
    };
    // Aggregate PRs by repository name
    const aggregatedUsers = [];
    const requesterNames = new Set();
    
    prData.forEach(pr => {
      if (!requesterNames.has(pr.requesterName)) {
        requesterNames.add(pr.requesterName);
        aggregatedUsers.push(pr);
      }
    });

    const searchedUsers =  aggregatedUsers && aggregatedUsers.filter(user =>
      user.requesterName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <>
        <label htmlFor="user" className='dashboard-search'>
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" placeholder='Search with username' id='user' onChange={handleUser} />
        </label>
        <div className="pull-reqs">
          {searchedUsers.map((pullReq, index) => {
            const totalReq = prData.filter(pr => pr.requesterName === pullReq.requesterName).length;
            const mergedReq = prData.filter(pr => pr.requesterName === pullReq.requesterName && pr.prStatus === 'Merged').length;
            const pendingReq = prData.filter(pr => pr.requesterName === pullReq.requesterName && pr.prStatus === 'Pending').length;
            return <UserCard
              key={index}
              type="user"
              img={'https://github.com/' + pullReq.requesterName + '.png'}
              repoName={pullReq.repoName}
              prId={pullReq.prId}
              title={pullReq.title}
              requesterName={pullReq.requesterName}
              requestedTime={pullReq.requestedTime}
              prStatus={pullReq.prStatus}
              totalPR={totalReq}
              prMerged={mergedReq}
              prPending={pendingReq}
            />
          })}
        </div>
      </>
    );
  };

  return (
    <>
      <div className="filter-via">
        <ul>
          <li className={location.pathname.startsWith("/dashboard/user") ? "" : "active"}>
            <Link to="/dashboard">Repositories</Link>
          </li>
          <li className={location.pathname.startsWith("/dashboard/user") ? "active" : ""}>
            <Link to="/dashboard/user">Users</Link>
          </li>
        </ul>
      </div>


      {filter === 'repo' && !isLoading && (params.repoName ? <FilteredRepo /> : <AllRepos />)}
      {filter === 'user' && !isLoading && (params.userName ? <FilteredUser /> : <UserDets />)}
      <div className='loading-animation'> {isLoading && <div className='loader'></div>}</div>
    </>
  );
};

export default Dashboard;
