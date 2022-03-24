import React from 'react';
// import { useContext } from 'react';
import './pages.css';
import { useState } from 'react';
import AppContext from '../context/AppContext';
import {useContext} from "react";
import MyPage from './MyPage';
import { Link, useNavigate } from 'react-router-dom';

export default function Register (){
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [user_id, setUser_Id] = useState()

    let {userToken} = useContext(AppContext);
    let navigate = useNavigate(); 
    // userToken = user_id; 
    console.log('userToken on create', userToken)
    let handleSubmit = (e) => {

        
        e.preventDefault();
            //might need to change the link for fetch
            //https://z-prefix-api.herokuapp.com/users
          fetch('https://z-prefix-api.herokuapp.com/posts/', {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             },
            method: "POST",
            mode: "cors",
            body: JSON.stringify({
              title: title,
              content: content,
              user_id: userToken,
            }),
          })
          .then((res) => res.json())
          .catch((err) => console.log(err, 'error from fetch'))
          setTimeout(function() {
              return navigate(`/mypage/${userToken}`);
              }, 1500);
        }

        return(
        <div className="forms">
            <h1>Make a Blog Post</h1>
                <form className='create-form' onSubmit={handleSubmit}>
                    <p>
                        <span><label for="title">Title:</label></span>
                        <span><input type="text"
                        onChange={(e) => setTitle((e.target.value))}/></span>
                    </p>
                    <div className="content-forms">
                        <p>
                            <span className="content-label"><label for="content">Content:</label></span>
                            <span>
                                <textarea name="name" cols="40" rows="5" onChange={(e) => setContent((e.target.value))}></textarea>
                                
                                {/* <input type="content"
                            onChange={(e) => setContent((e.target.value))}/> */}
                            </span>
                        </p>
                    </div> 
                    <button type="submit" className = "submitBtn">Publish Post</button>
                </form>
        </div> 
        ) 

    };