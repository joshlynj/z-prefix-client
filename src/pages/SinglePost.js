import React, { useState, useEffect, useContext } from 'react';
import './pages.css';
import { Link, useInRouterContext, useParams } from 'react-router-dom';
import AppContext from '../context/AppContext'
import App from '../App';
import PostByID from '../components/SinglePost';

// import {formatPostData} from '../components/AllPosts'; 

export default function Posts () {
    //Constants
    const {id} = useParams(); 
    const BASE_URL = "http://localhost:8080"

    const [singlePost, setSinglePost] = useState([]);

    const fetchData = () => {
        fetch(`${BASE_URL}/posts/${id}`)
          .then((response) => response.json())
          .then((data) => {
            setSinglePost(data);
            console.log(data)
          })
        //   .then(formatPostData)
          .catch((error) => {
            console.log(error);
          });
      };
      useEffect(() => {
        fetchData();
      }, []);
      console.log('single posts', singlePost)


    return(
    <div className = "posts">
        <div className='title'>
            <ul>
            </ul>
                {singlePost && <PostByID data = {singlePost} />}

        </div>
        
    </div>
    )
}

