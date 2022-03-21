import React, { useState, useEffect, useContext } from 'react';
import './pages.css';
import { Link, useInRouterContext } from 'react-router-dom';
import AppContext from '../context/AppContext'
import App from '../App';

export default function Posts () {
    //Constants
    const BASE_URL = "http://localhost:8080"

    const [allPosts, setAllPosts] = useState([]);
    // let {allPosts} = useContext(AppContext); 
    useEffect(() => {
        fetch(`${BASE_URL}/posts`)
          .then(response => response.json())
          .then(posts => setAllPosts(posts))
          .catch(err => console.log(err))
      }, [])

      console.log('all posts', allPosts)

    //   console.log('post content', allPosts[0].content)

    

    return(
    <div className = "posts">
        <div className='title'>
            <h2>fetched title</h2>
                <p>fetched content less than 100 characters</p>
                <p>fetched date</p>
        </div>
        
    </div>
    )
}

