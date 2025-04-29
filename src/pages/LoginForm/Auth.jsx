import React from 'react';
import './LoginForm.css';
import { FaUserTie} from "react-icons/fa6";   
import { FaLock } from "react-icons/fa";


const LoginForm = () => {
    return(
        <div className='wrapper'>   
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                <input type="text" placeholder="Username" required/>
                <FaUserTie className='icon'/>
                </div>
                <div className="input-box">
                <input type="password" placeholder="Password" required/>
                <FaLock className='icon' />
                </div>

                <div className ="rem-forgot">
                    <label> <input type="checkbox" />Remeber Me </label>
                    <a href="#">Forgot Password?</a>
                </div>

                <button type="submit">Login</button>

                <div className ="register-link">
                        <p> Don't Have and Account? <a href="#">Register</a></p>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;   
