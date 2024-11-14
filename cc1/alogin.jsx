import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./alogin.css";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const navigate = useNavigate(); 

  const handleLogin = (e) => {
    e.preventDefault();

    
    setErrors({});

    
    let isValid = true;
    const newErrors = {};

    if (!email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }

    if (!password) {
      newErrors.password = 'Password is required';
      isValid = false;
    }

    if (isValid) {
      
      console.log("Email:", email);
      console.log("Password:", password);
      alert("Login Successful!");
      navigate('/home'); 
    } else {
      setErrors(newErrors);
    }
  };

  const handleSignUp = () => {
    navigate('/signup'); 
  };

  return (
    <div className='a'>
      <div className="auth-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="error-text">{errors.email}</p>}
          
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p className="error-text">{errors.password}</p>}
          
          <button type="submit">Login</button>
        </form>
        <p>Don't have an account?</p>
        <button onClick={handleSignUp} className="signup-button">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Login;
