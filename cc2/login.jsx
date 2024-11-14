import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false); 

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login data:', formData);
    alert('Logged in successfully!');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between', 
    alignItems: 'center', 
    height: '100vh',
    width: '100vw', 
    backgroundImage: 'url(https://img.freepik.com/premium-psd/free-food-service-arrangement-with-background-mock-up_23-2148421299.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1728432000&semt=ais_hybrid)', // Background image
    backgroundSize: 'cover', 
    backgroundPosition: 'center', 
    fontFamily: 'Arial, sans-serif',
    padding: '0 50px', 
  };

  const formStyle = {
    backgroundColor: 'white',
    padding: '40px',
    width: '400px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    textAlign: 'left',
    fontFamily: 'Arial, sans-serif',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
  };

  const labelStyle = {
    fontWeight: 'bold',
    marginBottom: '5px',
    display: 'block',
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '18px',
    cursor: 'pointer',
  };

  const linkStyle = {
    textAlign: 'center',
    marginTop: '10px',
  };

  const gifStyle = {
    width: '400px',
    height: 'auto',
    marginLeft: '20px', 
    borderRadius: '10px',
  };

  const CheckLogin=()=>{
    const user=document.getElementById("user").value;
    const pass=document.getElementById("pass").value;
    if(user&&pass.length>5)
      {
          
          axios.get("http://localhost:3000/User")
          .then((res)=>
              {
                     const data=res.data;
                     console.log(data);
                     if(data.find(obj => obj.email === user))
                     {
                        let index=data.findIndex(obj => obj.email === user);
                        
                        if(data[index].password === pass)
                        {
                          window.location.href='/home';
                        }
                        else{
                          alert("Invalid password");
                        }
                     }
                     else
                     {
                      alert("User not found");
                      
                     }
                  
              })
              .catch((error)=>
              {
                  console.log(error);
              })
          
      }
  }
  return (
    <div style={containerStyle}>
      <form style={formStyle} onSubmit={handleSubmit}>
        <h2 style={{ textAlign: 'center' }}>Login</h2>

        <label style={labelStyle}>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          id="user"
          style={inputStyle}
          required
        />

        <label style={labelStyle}>Password</label>
        <input
          type={showPassword ? 'text' : 'password'} // Toggle between 'text' and 'password'
          name="password"
          value={formData.password}
          onChange={handleChange}
          id="pass"
          style={inputStyle}
          required
        />
        <label style={{ fontSize: '14px' }}>
          <input
            type="checkbox"
            checked={showPassword}
            onChange={togglePasswordVisibility}
            style={{ marginRight: '5px' }}
          />
          Show Password
        </label>

        <button type="submit" style={buttonStyle} onClick={CheckLogin}>
          Login
        </button>

        <p style={linkStyle}>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </form>

      {}
      <img
        src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWNlYTd6Y2N1aXl6d3pvbHQ5b2llNjVjOWc4amZreDdwYXZvZHRkaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tURgdJyjJ8IQMx7E1b/giphy.webp"
        alt="Login GIF"
        style={gifStyle}
      />
    </div>
  );
};

export default Login;