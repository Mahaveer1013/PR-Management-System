import React from 'react'
import UserCard from '../components/UserCard';
import { useParams } from 'react-router-dom';
import { prData } from '../datas/PrData';

const Profile = () => {

  const params = useParams();
  const myPr = params.userName ? prData.filter(item => item.requesterName === params.userName) : [];

  return (
    <>
      <h3 className='repo-title'>Pull Requests</h3>
      {params.userName && myPr.length !== 0 ? (
        <div className="all-repos">
          {myPr.map((pr, index) => (
            <UserCard
              key={index}
              type="pr"
              img={pr.img}
              repoName={pr.repoName}
              prId={pr.prId}
              title={pr.title}
              requesterName={pr.requesterName}
              requestedTime={pr.requestedTime}
              prStatus={pr.prStatus}
            />
          ))}
        </div>
      ) : (
        <h1>No user contributed to this repository</h1>
      )}
    </>
  );
}

export default Profile