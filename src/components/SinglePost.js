import React from 'react';
import AppContext from "../context/AppContext.js";
import {useContext} from "react"; 
import { Link, useNavigate } from 'react-router-dom';
import { render } from 'react-dom';


const singlePost = ({ data }) => {
  return (

    <div className = 'singlePost'>
      <ul>
        {data && data.map((item, index) => 
        <div className = 'individualPost' key={index}>
            <div className='postTitle'> {item.title}  </div>
            <div className='content'> {item.content} </div>
            <div className='date'>Date created: {item.created_at.substring(0,10)}</div>
        </div>)}    
      </ul>
    </div>
  );
};
export default singlePost;