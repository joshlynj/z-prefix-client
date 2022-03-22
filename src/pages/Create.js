import React from 'react';
// import { useContext } from 'react';
import './pages.css';
import { useState } from 'react';
    
export default function Register (){
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [user_id, setUser_Id] = useState()

    let handleSubmit = (e) => {

        
        e.preventDefault();
            //might need to change the link for fetch
            //https://z-prefix-api.herokuapp.com/users
          fetch('http://localhost:8080/posts', {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             },
            method: "POST",
            body: JSON.stringify({
              title: title,
              content: content,
              user_id: user_id
            }),
          })
          .then((res) => res.json())
          .catch((err) => console.log(err, 'error from fetch'))
        }

        return(
        <div className="forms">
            <h1>Make a Blog Post</h1>
                <form className='create-form' onSubmit={handleSubmit}>
                    <p>
                        <label for="title">Title:</label>
                        <input type="text"
                        onChange={(e) => setTitle((e.target.value))}/>
                    </p>
                    <p>
                        <label for="content">Content:</label>
                        <input type="content"
                        onChange={(e) => setContent((e.target.value))}/>
                    </p>
                    <p>
                        <label for="user_id">User ID:</label>
                        <input type="text"
                        onChange={(e) => setUser_Id((e.target.value))}/>
                    </p>

                    <button type="submit" className = "submitBtn">Create New Blog Post</button>
                </form>
        </div> 
        ) 

    };