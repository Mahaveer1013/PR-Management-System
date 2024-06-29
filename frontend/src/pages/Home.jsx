import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import poster from '../images/background-DHeaefIu.svg'
// import logo from '../images/codesapiens.png'
import { Link } from 'react-router-dom'

const Home = ({ isAuth }) => {
  return (
    <div className='home'>

      <div className="title">
        <p>Code Sapiens Summer Of Code</p>
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
              <Link to='/dashboard'>
                <FontAwesomeIcon icon={faArrowRight} /> Go To Dashboard 
              </Link>
              : <Link to='/login'>
                <FontAwesomeIcon icon={faArrowRight} /> Login 
              </Link>}
          </div>
        </div>
        <div className="right">
          <img src={poster} alt={poster} />
        </div>
      </div>

      <section className="what-soc">
        <h1>What is Summer Of Code ?</h1>
        <p> <FontAwesomeIcon icon={faArrowRight} /> Summer of Code is a program where students work on <span className="green">open-source projects</span>, learn coding skills, and get mentored by experts during the summer break.</p>
        <p> <FontAwesomeIcon icon={faArrowRight} /> Apart from the general internships, participating in Summer of Code actively adds value to students resume as they work on real time projects that are supervised by industry experts.</p>
        <p> <FontAwesomeIcon icon={faArrowRight} /> Students getting selected and participating are generally hired by the top companies as the competition is high.</p>
      </section>

      <section className="what-soc">
        <h1>Who is Code Sapiens?</h1>
        <p> <FontAwesomeIcon icon={faArrowRight} /> Code Sapiens is a student run community of <span className="green">1100+ students</span> in and around Tamil Nadu.</p>
        <p> <FontAwesomeIcon icon={faArrowRight} /> We conduct technical events, sessions with industry experts and hackathons.</p>
        <p> <FontAwesomeIcon icon={faArrowRight} /> Founded by <span className="green">Thiyaga B (Senior Engineer at Walmart Global Tech)</span></p>
        <p> <FontAwesomeIcon icon={faArrowRight} /> Now run by a 10 member student team from across various colleges in Tamil Nadu.</p>
      </section>

      <section className="what-soc">
        <h1>What is CSSOC?</h1>
        <p> <FontAwesomeIcon icon={faArrowRight} /> In our latest effort to empower the student community in Tamil Nadu, we are hosting a beginner friendly summer of code with cash prize and other benefits.</p>
        <p> <FontAwesomeIcon icon={faArrowRight} /> Students can learn from our beginner friendly sessions and will benefit from networking with fellow peers.</p>
        <p className="quote">
          A <span className="green">not for profit</span> initiative <span className="green">by</span> the students <span className="green">for</span> the students.<br/> To put it simply, CSSOC is an event where a senior helps junior but just done at a different larger scale that is loved by students and wanted by companies
        </p>
      </section>

      <section className="partners">
              <h1>Our Partners</h1>
      </section>


    </div>
  )
}

export default Home