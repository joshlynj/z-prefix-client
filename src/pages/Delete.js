import React from 'react';
// import { useContext } from 'react';
import './pages.css';
import { useState } from 'react';
import AppContext from '../context/AppContext';
import {useContext} from "react";
import MyPage from './MyPage';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function Register (){
    const {id} = useParams(); 
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
          fetch(`https://z-prefix-api.herokuapp.com/posts/${id} `, {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             },
            method: "DELETE",
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
            <h1>Are you sure you want to delete your post?</h1>
                <form className='create-form' onSubmit={handleSubmit}>
                    <button type="submit" className = "submitBtn">Delete</button>
                </form>
        </div> 
        ) 

    };