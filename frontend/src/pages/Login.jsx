import react from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../css/login.css';
const Login = () =>
{
    return(
    <div className='container'>
        <div className="header">
        <i class="fa fa-user" aria-hidden="true"></i>
        <h1 ><span>LOGIN</span></h1>
        </div>
        <div className="form-group">
            <form className="form-control">
                <div className="form-elements">
                    <label htmlFor='Githubuser'>GitHub Username: </label>
                    <input type="text" placeholder='Your GitHub id' id="Githubname" class="name"/>
                </div>
                <div className="form-elements">
                    <label htmlFor='Name'>Name:</label>
                    <input type="text" placeholder='Enter your name:' id="name" class="name"/>
                </div>
                <div className="form-elements">
                    <label htmlFor='EmailId'>GitHub Username: </label>
                    <input type="text" placeholder='Enter Your emailId:' id="Email" class="name"/>
                </div>
                <div className="form-elements">
                    <label htmlFor='Phone no'>Phone Number:</label>
                    <input type="text" placeholder='Enter Your Phone Number' id="Phone" class="name"/>
                </div>
                <div className="form-elements">
                    <label htmlFor='CollegeName'>College Name:</label>
                    <input type="text" placeholder='College Name' id="College" class="name"/>
                </div>
                
                <button type="submit">Submit</button>
            
            </form>
            
        </div>
    </div>
    );

};
export default Login;