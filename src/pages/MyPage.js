import React from 'react';
import './pages.css';
import {useContext} from "react";
import AppContext from '../context/AppContext';
import { Link, useNavigate } from 'react-router-dom';
import Create from './Create.js';

// import {styled } from '@mui/material/styles';


export default function MyPage (){

    // let {allPosts, userToken,} = useContext(AppContext);


    // let postid = userToken[0]
    // let userPost = allPosts.filter(data => data.userid === postid.id )


    return(
        <div> 
         {/* {Array.from(userPost).map(data,index)}  */}
            {/* {userPost} */}
            <h1>Your Posts</h1>

        <Link to="/create" element={<Create />}>
            <button type="submit" className = "submitBtn">Create Post</button>
        </Link>
        </div>
    )
};