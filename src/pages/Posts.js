import React, { useState, useEffect, useContext } from 'react';
import './pages.css';
import { Link, useInRouterContext } from 'react-router-dom';
import AppContext from '../context/AppContext'
import App from '../App';
import AllPosts from '../components/AllPosts';
// import {formatPostData} from '../components/AllPosts'; 

export default function Posts () {
    //Constants
    const BASE_URL = "https://z-prefix-api.herokuapp.com"

    const [allPosts, setAllPosts] = useState([]);

    const fetchData = () => {
        fetch(`${BASE_URL}/posts/`, {mode: "cors"})
          .then((response) => response.json())
          .then((data) => {
            setAllPosts(data);
          })
        //   .then(formatPostData)
          .catch((error) => {
            console.log(error);
          });
      };
      useEffect(() => {
        fetchData();
      }, []);
      console.log('all posts', allPosts)


    return(
    <div className = "posts">
        <div className='title'>
            <ul>
            </ul>
            <h2> Town Square </h2>
                {allPosts && <AllPosts data = {allPosts} />}

        </div>
        
    </div>
    )
}

