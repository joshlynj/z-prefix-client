//Style
import './App.css';

import React from 'react';
import {useState, useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
// import { Link } from 'react-router-dom';



//Pages import
import Home from './pages/Home.js';
import Login from './pages/Login.js';
import Register from './pages/Register.js';
import Posts from './pages/Posts.js';



//Component imports
import Navbar from './components/Navbar.js';

function App() {
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

  return (
    <>
      <main>
        {/* <AppContext.Provider value = {ContextObj}> */}
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={ <Login />} />
            <Route path='/posts' element={<Posts />} />
            {/* <Route path='/posts/id' element={<AboutMe />} />
            <Route path='/my-builds' element={<Build />} />
            <Route path='/order-form/' element={<OrderForm />} />
            <Route path='/order-form/1' element={<OrderType1/>} />
            <Route path='/order-form/2' element={<OrderType2/>} />
            <Route path='/order-form/3' element={<OrderType3/>} />
            <Route path='/order-form/4' element={<OrderType4/>} />
            <Route path='/order-form/5' element={<OrderType5/>} />
            <Route path='/order-form/6' element={<OrderCustom/>} /> */}
          </Routes>
          {/* </AppContext.Provider> */}
        </main>
      </>
  
  
    );
}

export default App;
