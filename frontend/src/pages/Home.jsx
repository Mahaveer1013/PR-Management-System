import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import ComputersCanvas from '../assets/canvas/Computers';
import GithubLogin from '../components/GithubLogin';
import partner_1 from '../images/partner_1.png';
import partner_2 from '../images/partner_2.png';
import partner_3 from '../images/partner_3.png';
import partner_5 from '../images/partner_5.jpg';
import partner_6 from '../images/partner_6.png';
import partner_7 from '../images/partner_7.png';
import partner_8 from '../images/partner_8.jpg';
import team_1 from '../images/team_1.png'
import team_2 from '../images/team_2.jpg'
import team_3 from '../images/team_3.jpg'
import team_4 from '../images/team_4.png'
import team_5 from '../images/team_5.png'
import team_6 from '../images/team_6.jpg'
import team_7 from '../images/team_7.jpg'
import team_8 from '../images/team_8.png'

const partners = [
  { img: partner_1, name: 'GDSC Rajalakshmi Engineering College' },
  { img: partner_2, name: 'AWS India' },
  { img: partner_3, name: 'Trio Devs' },
  { img: partner_1, name: 'GDSC Sai Ram Engineering College' },
  { img: partner_6, name: 'Flutter Chennai' },
  { img: partner_5, name: 'Chennai Geeks' },
  { img: partner_7, name: 'Chennai React' },
  { img: partner_8, name: 'Computer Society of Anna University' },
];

const TeamImages = [
  { img: team_1, name: 'Athi Ram', role: 'Lead', college: 'RMK Engineering College' },
  { img: team_2, name: 'Justin Benito', role: 'Lead', college: 'SSN College of Engineering' },
  { img: team_3, name: 'Koushik Ram', role: 'Lead', college: 'Panimalar Engineering College' },
  { img: team_4, name: 'Keerthana', role: 'Partners Outreach', college: 'Rajalakshmi Engineering College' },
  { img: team_5, name: 'Subha', role: 'PR and Design Head', college: 'Panimalar Engineering College' },
  { img: team_6, name: 'Bharathwaj', role: 'Development Lead', college: 'RMD Engineering College' },
  { img: team_8, name: 'Priyanka', role: 'Development', college: 'RMKCET Engineering College' },
  { img: team_7, name: 'Mahaveer A', role: 'Development', college: 'Panimalar Engineering College' },
];

const Home = ({ isAuth }) => {
  const partnersDivRef = useRef(null);
  const teamsDivRef = useRef(null);

  const scrollLeft = () => {
    if (partnersDivRef.current) {
      partnersDivRef.current.scrollBy({
        left: -300,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (partnersDivRef.current) {
      partnersDivRef.current.scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    }
  };

  const teamScrollLeft = () => {
    if (teamsDivRef.current) {
      teamsDivRef.current.scrollBy({
        left: -300,
        behavior: 'smooth'
      });
    }
  };

  const teamScrollRight = () => {
    if (teamsDivRef.current) {
      teamsDivRef.current.scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className='home'>
      <div className="title">
        <p>CodeSapiens Summer Of Code</p>
      </div>
      <div className="hero">
        <div className="left">
          <h1>The most</h1>
          <h1>BEGINNER FRIENDLY</h1>
          <h1>Open source event</h1>
          <p>July 15th - August 15th | Online | 50k+ Prizes</p>
          <h3>From being clueless to becoming timeless<br />
            Become busy with open source</h3>
          <div className="links">
            {isAuth ?
              <div className="login-home">
                <Link to='/dashboard'>
                  <FontAwesomeIcon icon={faArrowRight} /> Go To Dashboard
                </Link>
              </div>
              : <GithubLogin content='Sign in via Github' />
            }
          </div>
        </div>
        <div className="right">
          <ComputersCanvas />
        </div>
      </div>

      <section className="what-soc">
        <h1>What is Summer Of Code ?</h1>
        <p> <FontAwesomeIcon icon={faArrowRight} /> Summer of Code is a program where students work on <span className="green">open-source projects</span>, learn coding skills, and get mentored by experts during the summer break.</p>
        <p> <FontAwesomeIcon icon={faArrowRight} /> Apart from the general internships, participating in Summer of Code actively adds value to students resume as they work on real time projects that are supervised by industry experts.</p>
        <p> <FontAwesomeIcon icon={faArrowRight} /> Students getting selected and participating are generally hired by the top companies as the competition is high.</p>
      </section>

      <section className="partners">
        <h1>Our Partners</h1>
        <div className="partners-container">
          <div className="partner-left" onClick={scrollLeft}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </div>
          <div className="partners-div" ref={partnersDivRef}>
            {partners.map((partner, index) => (
              <div key={index} className="partner-slide">
                <div className="partner-img">
                  <img src={partner.img} alt={partner.name} />
                </div>
                <div className="partner-name">
                  {partner.name}
                </div>
              </div>
            ))}
          </div>
          <div className="partner-right" onClick={scrollRight}>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
      </section>

      <section className="what-soc">
        <h1>Who is Code Sapiens?</h1>
        <p> <FontAwesomeIcon icon={faArrowRight} /> Code Sapiens is a student run community of <span className="green">1100+ students</span> in and around Tamil Nadu.</p>
        <p> <FontAwesomeIcon icon={faArrowRight} /> We conduct technical events, sessions with industry experts and hackathons.</p>
        <p> <FontAwesomeIcon icon={faArrowRight} /> Founded by <span className="green">Thiyaga B (Senior Engineer at Walmart Global Tech)</span></p>
        <p> <FontAwesomeIcon icon={faArrowRight} /> Now run by a 10 member student team from across various colleges in Tamil Nadu.</p>
      </section>

      <section className="our-team">
        <h1>Our Team</h1>
        <div className="partners-container">
          <div className="partner-left" onClick={teamScrollLeft}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </div>
          <div className="partners-div" ref={teamsDivRef}>
            {TeamImages.map((team, index) => (
              <div key={index} className="partner-slide">
                <div className="partner-img">
                  <img src={team.img} alt={team.name} />
                </div>
                <div className="partner-name">
                  <p className='mem-name'>{team.name}</p>
                  <p>{team.role}</p>
                  <p>{team.college}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="partner-right" onClick={teamScrollRight}>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
      </section>

      <section className="what-soc">
        <h1>What is CSSOC?</h1>
        <p> <FontAwesomeIcon icon={faArrowRight} /> In our latest effort to empower the student community in Tamil Nadu, we are hosting a beginner friendly summer of code with cash prize and other benefits.</p>
        <p> <FontAwesomeIcon icon={faArrowRight} /> Students can learn from our beginner friendly sessions and will benefit from networking with fellow peers.</p>
        <p className="quote">
          A <span className="green">not for profit</span> initiative <span className="green">by</span> the students <span className="green">for</span> the students.<br /> To put it simply, CSSOC is an event where a senior helps junior but just done at a different larger scale that is loved by students and wanted by companies
        </p>
      </section>
    </div>
  )
}

export default Home;
