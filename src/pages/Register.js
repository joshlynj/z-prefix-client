import React from 'react';
// import { useContext } from 'react';
import './pages.css';
import { useState } from 'react';
    
export default function Register (){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [first_name, setFirst_name] = useState("")
    const [last_name, setLast_name] = useState("")

    let handleSubmit = (e) => {

        
        e.preventDefault();
            //might need to change the link for fetch
            //https://z-prefix-api.herokuapp.com/users
          fetch('http://localhost:8080/users', {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             },
            method: "POST",
            body: JSON.stringify({
              username: username,
              password: password,
              first_name: first_name,
              last_name: last_name,
            }),
          })
          .then((res) => res.json())
          .catch((err) => console.log(err, 'error from fetch'))
        }

        return(
        <div className="forms">
            <h1>Register Your Account</h1>
                <form className='register-form' onSubmit={handleSubmit}>
                    <p>
                        <label for="username">Username:</label>
                        <input type="text"
                        onChange={(e) => setUsername((e.target.value))}/>
                    </p>
                    <p>
                        <label for="password">Password:</label>
                        <input type="password"
                        onChange={(e) => setPassword((e.target.value))}/>
                    </p>
                    <p>
                        <label for="firstName">First Name:</label>
                        <input type="text"
                        onChange={(e) => setFirst_name((e.target.value))}/>
                    </p>
                    <p>
                        <label>Last Name:</label>
                        <input for="lastName" type="text"
                        onChange={(e) => setLast_name((e.target.value))}/>
                    </p>

                    <button type="submit" className = "submitBtn">Create Account</button>
                </form>
        </div> 
        ) 

    };