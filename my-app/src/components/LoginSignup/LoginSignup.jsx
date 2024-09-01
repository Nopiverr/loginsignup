
import React, { useState } from 'react';
import './LoginSignup.css';

import profile_icon from '../Assest/profile.png';
import email_icon from '../Assest/email.png';
import password_icon from '../Assest/password.png';
import eye_open from '../Assest/watch.png';
import eye_close from '../Assest/closed-eyes.png';
import backgd from '../Assest/back.jpg';

function LoginSignup() {
  const [action, setAction] = useState("Login");
  const [visible, setVisible] = useState(false);
  const [confirmVisible, setConfirmVisible] = useState(false); 
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});

  const handleInput = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
    console.log(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    // Validate Name
    if (action === "Sign Up" && !values.name.trim()) {
      validationErrors.name = "Name is required";
    }

    // Validate Email
    if (!values.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      validationErrors.email = "Email is not valid";
    }

    // Validate Password
    if (!values.password.trim()) {
      validationErrors.password = "Password is required";
    } else if (values.password.length < 6) {
      validationErrors.password = "Password should be at least 6 characters";
    }

    // Validate Confirm Password 
    if (action === "Sign Up" && values.confirmPassword !== values.password) {
      validationErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Form Submitted successfully");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* <pre>{JSON.stringify(values,undefined,2)}</pre> */}
      <div className="container">
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>

        <div className="inputs">
          {action === "Sign Up" && (
            <div className="input">
              <img
                src={profile_icon}
                alt="Username Icon"
                style={{ width: '20px', height: '20px' }}
              />
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={values.name}
                onChange={handleInput}
              />
              {errors.name && <span>{errors.name}</span>}
            </div>
          )}

          <div className="input">
            <img
              src={email_icon}
              alt="Email Icon"
              style={{ width: '20px', height: '20px' }}
            />
            <input
              type="email"
              name="email"
              placeholder="Email Id"
              value={values.email}
              onChange={handleInput}
            />
            {errors.email && <span>{errors.email}</span>}
          </div>

          <div className="input">
            <img
              src={password_icon}
              alt="Password Icon"
              style={{ width: '20px', height: '20px' }}
            />
            <input
              type={visible ? "text" : "password"} 
              name="password"
              placeholder="Password"
              value={values.password}
              onChange={handleInput}
            />
         
            <img
              src={visible ? eye_open : eye_close}
              alt="Password Visibility"
              style={{ width: '20px', height: '20px', cursor: 'pointer', marginLeft: '10px' }}
              onClick={() => setVisible(!visible)} 
            />
            {errors.password && <span>{errors.password}</span>}
          </div>

          {action === "Sign Up" && (
            <div className="input">
              <img
                src={password_icon}
                alt="Confirm Password Icon"
                style={{ width: '20px', height: '20px' }}
              />
              <input
                type={confirmVisible ? "text" : "password"} 
                name="confirmPassword"
                placeholder="Confirm Password"
                value={values.confirmPassword}
                onChange={handleInput}
              />
              
              <img
                src={confirmVisible ? eye_open : eye_close}
                alt=" Confirm Password Visibility"
                style={{ width: '20px', height: '20px', cursor: 'pointer', marginLeft: '10px' }}
                onClick={() => setConfirmVisible(!confirmVisible)} 
              />
              {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
            </div>
          )}
        </div>
        {action=="Sign Up"&&(<div className="message">
          Already have an account ! <span> Log in </span>
        </div>
        )}

        {action === "Login" && (
          <div className="forgot_password">
            Lost Password? <span>Click Here</span>
          </div>
        )}

        

        <div className="bottom-section">
          <div className="submit_container">
            <button
              type="button"
              className={action === "Login" ? "submit gray" : "submit"}
              onClick={() => setAction("Sign Up")}
            >
              Sign Up
              <div className="arrow-wrapper">
                <div className="arrow"></div>
              </div>
            </button>
            <button
              type="button"
              className={action === "Sign Up" ? "submit gray" : "submit "}
              onClick={() => setAction("Login")}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default LoginSignup;

