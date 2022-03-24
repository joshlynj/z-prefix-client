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
import Delete from './pages/Delete.js';
import Edit from './pages/Edit';

  //Constants
  const BASE_URL = "https://z-prefix-api.herokuapp.com"



function App() {

  //states
  const [userToken, setUserToken] = useState(0);
  const [useName, setUseName] = useState('');
  const [allPosts, setAllPosts] = useState('');

  useEffect(() => { 
    fetch (`${BASE_URL}/posts`)
      .then((res) => res.json())
      .then((data) => setAllPosts(data))
      .catch((err) => console.log(err));
  }, []); 

  console.log('usertoken logon', userToken)
  console.log('all posts', allPosts)

  function logon(credentials) {

    fetch(`${BASE_URL}/users/login`, {
      method: 'POST',
      mode: "cors",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials),

    })
      .then(response => response.json())
      //.then(data => setUserToken(data))
      .then(data => setUserToken(data))
      .catch(err => console.log(err));
      
      // console.log('data', (data))
  }




  let contextObj = {
    logon,
    setUseName,
    userToken, 
    setAllPosts
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
            <Route path='/mypage/:id' element={<MyPage/>} />
            <Route path='/delete/:id' element={<Delete />} />
            <Route path='/edit/:id' element={<Edit />} />
          </Routes>
          </AppContext.Provider>
        </main>
      </>
  
  
    );
}

export default App;

