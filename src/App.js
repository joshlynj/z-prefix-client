//Style
import './App.css';
//Component imports
import Navbar from './components/Navbar.js';
import AllPosts from './components/AllPosts';

import React from 'react';
import { useEffect, useState } from 'react';
import { Routes, Route, Router, Switch } from 'react-router-dom';
import AppContext from './context/AppContext';
// import { Link } from 'react-router-dom';



//Pages import
import Home from './pages/Home.js';
import Login from './pages/Login.js';
import Register from './pages/Register.js';
import Posts from './pages/Posts.js';
import SinglePost from './pages/SinglePost';
import Create from './pages/Create.js'; 
import MyPage from './pages/MyPage.js'; 

  //Constants
  const BASE_URL = "http://localhost:8080"



function App() {

  //states
  const [userToken, setUserToken] = useState(0);
  const [useName, setUseName] = useState('');

  
  function logon(credentials) {

    fetch(`${BASE_URL}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials),

    })
      .then(response => response.json())
      .then(userToken => setUserToken(userToken))
      .catch(err => console.log(err))
  }


  let contextObj = {
    logon,
    setUseName
  }

  return (
    <>
      <main>
        <AppContext.Provider value = {contextObj}>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={ <Login />} />
            <Route path='/posts' element={<Posts />} />
            <Route path='/create' element={<Create />} />
            <Route path='/posts/:id' element={<SinglePost/>} />
            <Route path='/mypage' element={<MyPage/>} />
          </Routes>
          </AppContext.Provider>
        </main>
      </>
  
  
    );
}

export default App;


// was under function App
  // //Constants
  //   //Constants
  //   const BASE_URL ={
  //     development: "http://localhost:8080",
  //     production: "https://z-prefix-api.herokuapp.com/"
  //   } 
  
  //   fetch(BASE_URL)
  // const [state, setState] = useState(false)
  // const [userToken, setUserToken] = useState(0);
  // const [postState, setPostState] = useState({});
  // const [allPosts, setAllPosts] = useState([]);
  // const [useName, setUseName] = useState('');
  // const [userID, setUserID] = useState(0);


  // useEffect(() => {
  //   fetch(`${BASE_URL}/posts`)
  //     .then(response => response.json())
  //     .then(posts => setAllPosts([posts]))
  //     .catch(err => console.log(err))

  //   // fetch(`${BASE_URL}/candy`)
  //   //   .then(response => response.json())
  //   //   .then(candy => setCandyInfo(candy))
  //   //   .catch(err => console.log(err))
  // }, [])




  // function logon(credentials) {

  //   fetch(`${BASE_URL}/users/login`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(credentials),

  //   })
  //     .then(response => response.json())
  //     .then(token => setUserToken(token))
  //     .catch(err => console.log(err))
  // }

  // function signup(credentials) {
  //   fetch(`${BASE_URL}/users/register`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(credentials),

  //   })
  //     .then(response => setPostState(response))
  //     .then(token => setUserToken(token))
  //     .catch(err => console.log(err))
  // }



  // function logout() {
  //   setUserToken(0);
  // }


  // let contextObj = {
  //   logon,
  //   logout,
  //   setPostState,
  //   allPosts,
  //   setUseName,
  //   signup,
  // }
