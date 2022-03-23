import React from 'react';
import AppContext from "../context/AppContext.js";
import {useContext} from "react"; 
import { Link, useNavigate } from 'react-router-dom';
import { render } from 'react-dom';


const AllPosts = ({ data }) => {

  
  // const ToggleButton = () => {
  //   const [editState, setEditState] = useState(false);
  //   const toggleEditState = () => {
  //       setEditState(!editState)
  //   }
// }

  return (

    <div classname = 'allPosts'>
      <ul>
        {data && data.map((item, index) => 
        <div className = 'individualPost' key={index}>
            <div className='postTitle'> {item.title}  </div>
            <div className='content'> {item.content.substring(0,100)} </div>
            <div className='date'>Date created: {item.created_at.substring(0,10)}</div>
            <Link to = {`/Posts/${item.id}`}element={<AllPosts/>}>
                <button type="button" className = "submitBtn"> Read More</button>
            </Link>
        </div>)}    
      </ul>
    </div>
  );
};
export default AllPosts;
