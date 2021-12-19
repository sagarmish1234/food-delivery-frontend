import React from 'react'
import '../css/login.css'
import { Form } from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { currentUser } from '../App'
import { useContext } from 'react'
import apiUrl from "../apiUrl"


export default function Login() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  })
  const {state, dispatch} = useContext(currentUser);
  const navigate = useNavigate();
  const handleInput = (e) => {
    const name = e.target.name
    setUser({ ...user, [name]: e.target.value })
  }
  const Submit = (e) => {
    e.preventDefault()
    fetch(apiUrl+'/api/users/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data)
        if(data.success === true){
          document.cookie = `username =${data.message.name}; max-age=10`;
          localStorage.setItem("user",data.message.name);
          localStorage.setItem("token",data.token);
          dispatch({type : "USER",payload : data.message.name})
          console.log(state)
          window.scrollTo(0,0);
          navigate("/")
        }
        else{
          alert(data.message)
        }
      })
    
  }

  return (
    <>
      {/* <h1>User Login</h1> */}
      <div className="login-background" id="login-form">
        <div className="login-container" >
          <img
            src="pexels-guillaume-meurice-1591447.jpg"
            alt="img"
            className="login-image"
          />
          <div className="inside-form">
            <form onSubmit={Submit} method="POST" >
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter the email"
                onChange={handleInput}
                value={user.email}
                className="login-input"
                required={true}
              />

              <br />
              <input
                type="password"
                name="password"
                id="password"
                onChange={handleInput}
                value={user.password}
                placeholder="Enter the password"
                required={true}
                className="login-input"
              />
              <br />
              <button type="submit" className="login-button">
                Login
              </button>
            </form>
            <NavLink to="/register" style={{textDecoration:"none"}}>
              <p style={{ textAlign: 'right', marginTop: '10px' , color:"white",fontSize:"20px"}}>
                New User? Register Here
              </p>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  )
}
