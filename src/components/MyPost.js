import React from 'react';
import AppContext from "../context/AppContext.js";
import { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { render } from 'react-dom';
import '../pages/pages.css';
import AllPosts from './AllPosts.js';
import Delete from '../pages/Delete.js';

const myPost = ({ data }) => {


  return (

    <div className = 'myPost'>
      <ul>
        {data && data.map((item, index) => 
        <div className = 'myPost' key={index}>
            <div className='postTitle'> {item.title}  </div>
            <div className='content'> {item.content.substring(0,100)} </div>
            <div className='date'>Date created: {item.created_at.substring(0,10)}</div>
            <span>
                <Link to = {`/Posts/${item.id}`}element={<AllPosts/>}>
                    <button type="button" className = "submitBtn"> Read More</button>
                </Link>   

                <Link to = {`/Delete/${item.id}`}element={<Delete/>}>
                    <button type="button" className = "deleteBtn"> Delete Post</button>
                </Link>
                <button  type="submit" className = "submitBtn">Edit Post</button>
            </span>
        </div>)}    
      </ul>
    </div>
  );
};
export default myPost;