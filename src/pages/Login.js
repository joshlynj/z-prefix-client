import React from 'react';
// import { useContext } from 'react';
import Register from './Register.js';
import { Link, useNavigate } from 'react-router-dom';
import './pages.css';
import Posts from './Posts';



function sendLogin(e){
    
   let username = e.target.form[0].value;
   let password = e.target.form[1].value;
   console.log('username', username)
   console.log('password', password)

   //https://z-prefix-api.herokuapp.com/users
   fetch(`http://localthost:8080/users`, {
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
       },
        method: "POST",
        body: JSON.stringify({
          username: username,
          password: password
       
        })
    })
    .then((res) => res.json())
    .then(data => console.log(data))
    .catch((err) => console.log(err))

};

export default function Login() {
    
    return (
        <div className="forms">
            <h1>Please Login</h1>
            <form className="login-form">
                <p>
                    <label>Username:</label>
                    <input for="username" type="text" />
                </p>
                <p>
                    <label>Password:</label>
                    <input for="username" type="password" />
                </p>
                <Link to="/posts" element={<posts />}>
                <button onClick={e => sendLogin(e)} type="submit" className = "submitBtn">Login</button>
                </Link>
            </form>

            <h2>Don't have an account?</h2>
            <form>
                <Link to="/register" element={<Register />}>
                    <button type="button" className = "submitBtn">Register Here</button>
                </Link>
            </form>
        </div>
    )

};




// import React from 'react';
// import {useContext} from 'react';
// import AppContext from '../context/AppContext';
// import {useEffect, useState} from 'react';
// import PropTypes from 'prop-types';
// // import {
// //   Checkbox,
// //   Grid,
// //   TextField,
// //   FormControlLabel,
// //   Paper,
// //   Button
// // } from '@material-ui/core';
// import { Button } from '../components/button.js';
// import { Routes, Route, useNavigate, Link } from "react-router-dom";

// // export default function Login({ setToken }) {
// //   const [username, setUserName] = useState();
// //   const [password, setPassword] = useState();

// //   let {logon, setUseName} = useContext(AppContext);
// //   let navigate = useNavigate();

// //   const handleSubmit = async e => {
// //     e.preventDefault();
// //     const token = await logon({
// //       username,
// //       password
// //     });
// //     navigate('/home');
// //     setUseName(username);


// export default function Login(){

// }

// return(
//     // <div className="login-wrapper">
//     //   <h1>Please Log In</h1>
//     //   <form onSubmit={handleSubmit}>
//     //     <label>
//     //       <p>Username</p>
//     //       <input type="text" onChange={e => setUserName(e.target.value)} />
//     //     </label>
//     //     <label>
//     //       <p>Password</p>
//     //       <input type="password" onChange={e => setPassword(e.target.value)} />
//     //     </label>
//     //     <div>
//     //       <button type="submit">Submit</button>
//     //       <Link to="/register">
//     //       <Button renderAs="button">
//     //       <span>Sign up</span>
//     //       </Button>
//     //       </Link>

//     //     </div>
//     //   </form>
//     // </div>
//   )
// }