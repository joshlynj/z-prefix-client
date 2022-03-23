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
      <div className="login-wrapper">
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
            <button type="submit">Submit</button>
            <Link to="/register">
            <Button renderAs="button">
            <span>Sign up</span>
            </Button>
            </Link>
  
          </div>
        </form>
      </div>
    )
  }





// export default function Login() {
//     const [username, setUsername] = useState("")
//     const [password, setPassword] = useState("")

//     let user = username[0]
//     let pass = password[0]

//     console.log(password, 'password')
//     console.log(username, 'username')
//     let handleSubmit = (e) => {
//     console.log(e);
//     e.preventDefault(); 
//         console.log('e',e);
//     //    let username = e.target.form[0].value;
//     //    let password = e.target.form[1].value;
//     //    console.log('username', username)
//     //    console.log('password', password)
    
//        //https://z-prefix-api.herokuapp.com/users
//             let body = JSON.stringify({user, pass});
//             console.log(body)
//             fetch(`http://localhost:8080/users/login`, {

//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Accept': 'application/json'
//                 },
//                 method: "POST",
//                 body,
//             })
//             .then((res) => res.json())
//             .catch((err) => console.log(err, 'error from fetch'))
//             // .then((data) => setUserToken(data))
//             // const data = await res.json();
//             // return console.log(data);
//         // } catch (err) {
//             // return console.log(err);
//         }
    

//     return (
//         <div className="forms">
//             <h1>Please Login</h1>
//             <form className="login-form">
//                 <p>
//                     <label>Username:</label>
//                     <input for="username" type="text" 
//                      onChange={(e) => setUsername((e.target.value))}/>
//                 </p>
//                 <p>
//                     <label>Password:</label>
//                     <input for="password" type="password" 
//                     onChange={(e) => setPassword((e.target.value))}/>
//                 </p>
//                 {/* <Link to="/posts" element={<Posts />}> */}
//                 <button onClick={handleSubmit} type="submit" className = "submitBtn">Login</button>
//                 {/* </Link> */}
//             </form>

//             <h2>Don't have an account?</h2>
//             <form>
//                 <Link to="/register" element={<Register />}>
//                     <button type="button" className = "submitBtn">Register Here</button>
//                 </Link>
//             </form>
//         </div>
//     )


// };




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