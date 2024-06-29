import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Leaderboard = () => {
  return (
    <div className="leaderboard">
      <div className="title">
        <h1>Summer Of Code Leaderboard</h1>
      </div>
      <div className="leaderboard-table">
      <table border={'1px'}>
      <thead>
        <tr>
          <th>#</th>
          <th>Username</th>
          <th>Points</th>
          <th>View User</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td className='username'>Mahaveer <span className="first">1st</span></td>
          <td>130</td>
          <td><Link to='/'><FontAwesomeIcon icon={faArrowRight} /></Link></td>
        </tr>
        <tr>
          <td>2</td>
          <td className='username'>Bharathwaj <span className="second">2nd</span></td>
          <td>110</td>
          <td><Link to='/'><FontAwesomeIcon icon={faArrowRight} /></Link></td>
        </tr>
        <tr>
          <td>3</td>
          <td className='username'>Priyanka <span className="third">3rd</span></td>
          <td>100</td>
          <td><Link to='/'><FontAwesomeIcon icon={faArrowRight} /></Link></td>
        </tr>
        <tr>
          <td>4</td>
          <td className='username'>Justin</td>
          <td>90</td>
          <td><Link to='/'><FontAwesomeIcon icon={faArrowRight} /></Link></td>
        </tr>
        <tr>
          <td>5</td>
          <td className='username'>Koushik</td>
          <td>80</td>
          <td><Link to='/'><FontAwesomeIcon icon={faArrowRight} /></Link></td>
        </tr>
        <tr>
          <td>6</td>
          <td className='username'>User6</td>
          <td>79</td>
          <td><Link to='/'><FontAwesomeIcon icon={faArrowRight} /></Link></td>
        </tr>
        <tr>
          <td>7</td>
          <td className='username'>User7</td>
          <td>78</td>
          <td><Link to='/'><FontAwesomeIcon icon={faArrowRight} /></Link></td>
        </tr>
        <tr>
          <td>8</td>
          <td className='username'>User8</td>
          <td>77</td>
          <td><Link to='/'><FontAwesomeIcon icon={faArrowRight} /></Link></td>
        </tr>
        <tr>
          <td>9</td>
          <td className='username'>User9</td>
          <td>76</td>
          <td><Link to='/'><FontAwesomeIcon icon={faArrowRight} /></Link></td>
        </tr>
        <tr>
          <td>10</td>
          <td className='username'>User10</td>
          <td>75</td>
          <td><Link to='/'><FontAwesomeIcon icon={faArrowRight} /></Link></td>
        </tr>
        <tr>
          <td>11</td>
          <td className='username'>User11</td>
          <td>74</td>
          <td><Link to='/'><FontAwesomeIcon icon={faArrowRight} /></Link></td>
        </tr>
        <tr>
          <td>12</td>
          <td className='username'>User12</td>
          <td>73</td>
          <td><Link to='/'><FontAwesomeIcon icon={faArrowRight} /></Link></td>
        </tr>
        <tr>
          <td>13</td>
          <td className='username'>User13</td>
          <td>72</td>
          <td><Link to='/'><FontAwesomeIcon icon={faArrowRight} /></Link></td>
        </tr>
        <tr>
          <td>14</td>
          <td className='username'>User14</td>
          <td>71</td>
          <td><Link to='/'><FontAwesomeIcon icon={faArrowRight} /></Link></td>
        </tr>
        <tr>
          <td>15</td>
          <td className='username'>User15</td>
          <td>70</td>
          <td><Link to='/'><FontAwesomeIcon icon={faArrowRight} /></Link></td>
        </tr>
        <tr>
          <td>16</td>
          <td className='username'>User16</td>
          <td>69</td>
          <td><Link to='/'><FontAwesomeIcon icon={faArrowRight} /></Link></td>
        </tr>
        <tr>
          <td>17</td>
          <td className='username'>User17</td>
          <td>68</td>
          <td><Link to='/'><FontAwesomeIcon icon={faArrowRight} /></Link></td>
        </tr>
        <tr>
          <td>18</td>
          <td className='username'>User18</td>
          <td>67</td>
          <td><Link to='/'><FontAwesomeIcon icon={faArrowRight} /></Link></td>
        </tr>
        <tr>
          <td>19</td>
          <td className='username'>User19</td>
          <td>66</td>
          <td><Link to='/'><FontAwesomeIcon icon={faArrowRight} /></Link></td>
        </tr>
        <tr>
          <td>20</td>
          <td className='username'>User20</td>
          <td>65</td>
          <td><Link to='/'><FontAwesomeIcon icon={faArrowRight} /></Link></td>
        </tr>
        <tr>
          <td>21</td>
          <td className='username'>User21</td>
          <td>64</td>
          <td><Link to='/'><FontAwesomeIcon icon={faArrowRight} /></Link></td>
        </tr>
        <tr>
          <td>22</td>
          <td className='username'>User22</td>
          <td>63</td>
          <td><Link to='/'><FontAwesomeIcon icon={faArrowRight} /></Link></td>
        </tr>
        <tr>
          <td>23</td>
          <td className='username'>User23</td>
          <td>62</td>
          <td><Link to='/'><FontAwesomeIcon icon={faArrowRight} /></Link></td>
        </tr>
        <tr>
          <td>24</td>
          <td className='username'>User24</td>
          <td>61</td>
          <td><Link to='/'><FontAwesomeIcon icon={faArrowRight} /></Link></td>
        </tr>
        <tr>
          <td>25</td>
          <td className='username'>User25</td>
          <td>60</td>
          <td><Link to='/'><FontAwesomeIcon icon={faArrowRight} /></Link></td>
        </tr>
        <tr>
          <td>26</td>
          <td className='username'>User26</td>
          <td>59</td>
          <td><Link to='/'><FontAwesomeIcon icon={faArrowRight} /></Link></td>
        </tr>
        <tr>
          <td>27</td>
          <td className='username'>User27</td>
          <td>58</td>
          <td><Link to='/'><FontAwesomeIcon icon={faArrowRight} /></Link></td>
        </tr>
        <tr>
          <td>28</td>
          <td className='username'>User28</td>
          <td>57</td>
          <td><Link to='/'><FontAwesomeIcon icon={faArrowRight} /></Link></td>
        </tr>
        <tr>
          <td>29</td>
          <td className='username'>User29</td>
          <td>56</td>
          <td><Link to='/'><FontAwesomeIcon icon={faArrowRight} /></Link></td>
        </tr>
        <tr>
          <td>30</td>
          <td className='username'>User30</td>
          <td>55</td>
          <td><Link to='/'><FontAwesomeIcon icon={faArrowRight} /></Link></td>
        </tr>
      </tbody>
    </table>
      </div>
    </div>
  )
}

export default Leaderboard