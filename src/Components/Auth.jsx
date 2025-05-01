import React, { useState } from 'react';
import './LoginForm.css';
import { FaUserTie } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ setIsAuthenticated }) => {
    const [action, setAction] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const registerLink = () => {
        setAction(' active');
        setError('');
    };

    const loginLink = () => {
        setAction('');
        setError('');
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5196/api/auth/login', {
                username,
                password,
            });

            console.log("Login API Response:", response.data);

            if (response.data && response.data.success === true) {
                localStorage.setItem('isAuthenticated', 'true');
                localStorage.setItem('user', JSON.stringify(response.data.username));
                setIsAuthenticated(true);
                navigate('/dashboard');
            } else {
                setError(response.data?.message || 'Login failed.');
            }
        } catch (err) {
            console.error("Login Error:", err);
            setError(err.response?.data?.message || 'Login hello.');
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5196/api/register/register', {
                username,
                password,
                email,
            });

            console.log("Register API Response:", response.data);

            if (response.data.success === true) {
                alert("Registration successful!");
                loginLink(); // switch to login form
            } else {
                setError(response.data?.message || 'Registration failed.');
            }
        } catch (err) {
            console.error("Register Error:", err);
            setError(err.response?.data?.message || 'Registration failed.');
        }
    };

    return (
        <div className={`wrapper${action}`}>   
            <div className="form-box login">
                <form onSubmit={handleLogin}>
                    <h1>Login</h1>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <div className="input-box">
                        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                        <FaUserTie className='icon'/>
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        <FaLock className='icon' />
                    </div>
                    <div className="rem-forgot">
                        <label><input type="checkbox" /> Remember Me</label>
                        <a href="#">Forgot Password?</a>
                    </div>
                    <button type="submit">Login</button>
                    <div className="register-link">
                        <p>Don't have an account? <a href="#" onClick={registerLink}>Register</a></p>
                    </div>
                </form>
            </div>

            <div className="form-box register">
                <form onSubmit={handleRegister}>
                    <h1>Registration</h1>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <div className="input-box">
                        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                        <FaUserTie className='icon'/>
                    </div>
                    <div className="input-box">
                        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <TfiEmail className='icon'/>
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        <FaLock className='icon' />
                    </div>
                    <div className="rem-forgot">
                        <label><input type="checkbox" /> I agree to the terms and conditions</label>
                    </div>
                    <button type="submit">Register</button>
                    <div className="register-link">
                        <p>Already have an account? <a href="#" onClick={loginLink}>Login</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
