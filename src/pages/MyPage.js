import React from 'react';
import './pages.css';
import AppContext from '../context/AppContext';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Create from './Create.js';
import { useState, useEffect, useContext } from 'react';
import MyPost from '../components/MyPost';

// import {styled } from '@mui/material/styles';


export default function MyPage (){

 
    let { userToken} = useContext(AppContext);

    
    // let postid = userToken[0]
    // let userPost = allPosts.filter(data => data.userid === postid.id )
    //Constants
    const {user_id} = useParams();
    const BASE_URL = "https://z-prefix-api.herokuapp.com"

    const [myPost, setMyPost] = useState([]);
    
    const fetchData = () => {
        fetch(`${BASE_URL}/posts/users/${userToken}`)
          .then((response) => response.json())
          .then((data) => {
            setMyPost(data);
          })
        //   .then(formatPostData)
          .catch((error) => {
            console.log(error);
          });
      };
      useEffect(() => {
        fetchData();
      }, []);
      console.log('My posts', myPost)


    return(
        <div classname='myPage'> 
            
            <h1>Your Posts</h1>
            <div className = 'createPostBtn'>
                <Link to="/create" element={<Create />}>
                    <button type="submit" className = "submitBtn">Create Post</button>
                </Link>
             </div>
                {myPost && <MyPost data = {myPost} />}
        </div>
    )
};