
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();

  }
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundImage: 'url(https://static.vecteezy.com/system/resources/previews/049/097/874/non_2x/top-view-of-fast-food-pizza-box-burger-and-chicken-strips-on-a-white-background-with-copy-space-photo.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '20px',
  };

  const formStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
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

  const passwordContainerStyle = {
    position: 'relative',
  };

  const iconStyle = {
    position: 'absolute',
    right: '10px',
    top: '50%',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
    color: '#888',
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    backgroundColor: '#ff6347',
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

  const starStyle = {
    color: 'red',
    marginLeft: '5px',
  };

  const CheckRegister=()=>{
    const fname=document.getElementById("fname").value;
    const lname=document.getElementById("lname").value;
    const user=document.getElementById("user").value;
    const number=document.getElementById("number").value;
    const address=document.getElementById("address").value;
    const city=document.getElementById("city").value;
    const state=document.getElementById("state").value;
    const pass=document.getElementById("pass").value;
    const con=document.getElementById("con").value;
    axios.get('http://localhost:3000/User')
       .then((res)=>
        {
            const data=res.data;
            const userData=data.find(obj => obj.email === user)
            if(!userData&&pass.length>5)
            {
                
                if(pass===con)
                {
                    axios.post('http://localhost:3000/User',{
                        first_name:fname,
                        last_name:lname,
                        email:user,
                        phone:number,
                        address:address,
                        city:city,
                        state:state,
                        password:pass
                    })
                    .then(()=>{
                      window.location.href='/';
                    })
                    .catch(err=> console.log(err))
               }
               else{
                alert("Password Mismatch");
               }
            }
            else
            {
              if(pass.length<6)
              {
                alert("Password must be at least 6");
              }
              else
              {
                alert("User already exists");
              }
            }
        })
       .catch((err)=>console.log(err))
  }
  return (
    <div style={containerStyle}>
      <form style={formStyle} onSubmit={handleSubmit}>
        <h2 style={{ textAlign: 'center' }}>Sign Up</h2>

        <label style={labelStyle}>
          First Name<span style={starStyle}>*</span>
        </label>
        <input
          type="text"
          name="firstName"
          id="fname"
          style={inputStyle}
          required
        />

        <label style={labelStyle}>
          Last Name<span style={starStyle}>*</span>
        </label>
        <input
          type="text"
          name="lastName"
          id="lname"
          style={inputStyle}
          required
        />

        <label style={labelStyle}>
          Email<span style={starStyle}>*</span>
        </label>
        <input
          type="email"
          name="email"
          id="user"
          style={inputStyle}
          required
        />

        <label style={labelStyle}>
          Contact Number<span style={starStyle}>*</span>
        </label>
        <input
          type="tel"
          name="contactNumber"
          id="number"
          style={inputStyle}
          required
        />

        <label style={labelStyle}>
          Address<span style={starStyle}>*</span>
        </label>
        <input
          type="text"
          name="address"
          id="address"
          style={inputStyle}
          required
        />

        <label style={labelStyle}>
          City<span style={starStyle}>*</span>
        </label>
        <input
          type="text"
          name="city"
          id="city"
          style={inputStyle}
          required
        />

        <label style={labelStyle}>
          State<span style={starStyle}>*</span>
        </label>
        <input
          type="text"
          name="state"
          id="state"
          style={inputStyle}
          required
        />

        <label style={labelStyle}>
          Password<span style={starStyle}>*</span>
        </label>
        <div style={passwordContainerStyle}>
          <input
            type={passwordVisible ? 'text' : 'password'}
            name="password"
            id="pass"
            style={inputStyle}
            required
          />
          <span
            style={iconStyle}
            onClick={togglePasswordVisibility}
          >
            {passwordVisible ? '👁️' : '👁️‍🗨️'}
          </span>
        </div>

        <label style={labelStyle}>
          Confirm Password<span style={starStyle}>*</span>
        </label>
        <div style={passwordContainerStyle}>
          <input
            type={confirmPasswordVisible ? 'text' : 'password'}
            name="confirmPassword"
            id="con"
            style={inputStyle}
            required
          />
          <span
            style={iconStyle}
            onClick={toggleConfirmPasswordVisibility}
          >
            {confirmPasswordVisible ? '👁️' : '👁️‍🗨️'}
          </span>
        </div>

        <button type="submit" style={buttonStyle} onClick={CheckRegister}>
          Sign Up
        </button>

        <p style={linkStyle}>
          
          Already have an account? <Link to="/">Login here</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
