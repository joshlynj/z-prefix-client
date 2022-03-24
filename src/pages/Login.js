import React from 'react';
// import { useContext } from 'react';
import Register from './Register.js';
import { Link, useNavigate } from 'react-router-dom';
import './pages.css';
import Posts from './Posts';
import { useState } from 'react';
import {useContext} from 'react';
import AppContext from '../context/AppContext';
import PropTypes from 'prop-types';
import {
  Checkbox,
  Grid,
  TextField,
  FormControlLabel,
  Paper,
  Button
} from '@material-ui/core';


export default function Loginpage({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
  
    let {logon, userToken} = useContext(AppContext);
    let navigate = useNavigate();
  
    const handleSubmit = async e => {
      e.preventDefault();
      const token = await logon({
        username,
        password
      });
      setTimeout(function() {
      return navigate(`/mypage/${userToken}`);
      }, 1500);
      setUserName(username); 
    }
  
    return(
      <div className="forms">
        <div className="register-form">
        <h1>Please Log In</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <p>Username</p>
            <input type="text" onChange={e => setUserName(e.target.value)} />
          </label>
          <label>
            <p>Password</p>
            <input type="password" onChange={e => setPassword(e.target.value)} />
          </label>
          <div>
            <button type="submit" className = "submitBtn">Submit</button>
            </div>
            </form>
          </div>
          <div>
          No account?
          <span>
          
            <Link to="/register">
              <Button renderAs="button">
                Sign up!
              </Button>
            </Link>
          </span>
          </div>  
      </div>
      
    )
  }

