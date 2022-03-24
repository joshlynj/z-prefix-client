import React from 'react';
import AppContext from "../context/AppContext.js";
import { useState, useEffect, useContext } from 'react';
import { Link, useNavigate, useParams  } from 'react-router-dom';
import { render } from 'react-dom';
import '../pages/pages.css';
import AllPosts from './AllPosts.js';
import Delete from '../pages/Delete.js';
import Edit from '../pages/Edit.js';
import { TextField, Box, Modal } from '@material-ui/core';


const MyPost = ({data}) => {
  // let { handleEdit} = useContext(AppContext);
  // let {userToken} = useContext(AppContext);
  // const [content, setContent] = useState();
  // const {id} = useParams(); 
  // const [open, setOpen] = useState(false);
  // const [title, setTitle] = useState();
  // let navigate = useNavigate(); 



  // const Toggle = () => {
  //   const [isToggledOn, setToggle] = useState(false)
  //   const toggle = () => setToggle(!isToggledOn)
  // const style = {
  //   position: "absolute",
  //   top: "50%",
  //   left: "50%",
  //   transform: "translate(-50%, -50%)",
  //   width: 400,
  //   bgcolor: "background.paper",
  //   border: "2px solid #000",
  //   boxShadow: 24,
  //   pt: 2,
  //   px: 4,
  //   pb: 3,
  // };
  
  // const handleOpen = () => {
  //   setOpen(true);
  // };
  // const handleClose = () => {
  //   setOpen(false);
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const post = await handleEdit({
  //     userToken,
  //     title,
  //     content,
  //   });
  //   handleClose(setOpen(true))
  //   // console.log("inside submit", content);
  // };


  return (
    
    <div className = 'outsideBoundary2'>
    <div className = 'outsideBoundary'>
      <ul>
        {data && data.map((item, index) => 
        <div className = 'myPost' key={index}>
            <div className='postTitle'> {item.title}  </div>
            <div className='content'> {item.content.length < 100 ? item.content:item.content.substring(0,100)+'...'} </div>
            <div className='date'>Date created: {item.created_at.substring(0,10)}</div>
            <span>
                <Link to = {`/Posts/${item.id}`}element={<AllPosts/>}>
                    <button type="button" className = "submitBtn"> Read More</button>
                </Link>   
                
                <Link to = {`/Delete/${item.id}`}element={<Delete/>}>
                    <button type="button" className = "deleteBtn"> Delete Post</button>
                </Link>

                <Link to = {`/Edit/${item.id}`}element={<Edit/>}>
                  <button type="submit" className = "submitBtn">Edit Post</button>
                </Link>

                {/* <button onClick={handleOpen} type="submit" className = "submitBtn">Edit Post */}
                {/* {isToggledOn ? 'ON' : 'OFF'} */}
                {/* </button> */}

                {/* <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  
                <Box sx={style}>
                  <TextField
                    defaultValue={item.title}
                    justify="center"
                    onChange={(e) => setTitle(e.target.value)}
                  >
                  </TextField>

                  <TextField
                    style={{minHeight: 200, minWidth: 200}}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    >
                  
                  </TextField>

                  <button
                    onClick={handleSubmit}  type="submit" className = "submitBtn">Finalize Edit
                  </button>
                </Box>
              </Modal> */}


            </span>
        </div>)}    
      </ul>
    </div>
    </div>
  );
} 

export default MyPost;