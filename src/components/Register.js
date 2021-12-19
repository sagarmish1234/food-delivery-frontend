import React from 'react'
// import { Form } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import '../css/register.css'
import { useNavigate } from 'react-router-dom'
export default function Register() {
  const [user, setUser] = useState({
    designation: '',
    name: '',
    email: '',
    mobile: '',
    mobileAlt: '',
    state: '',
    district: '',
    area: '',
    password: '',
    password2: '',
  })
  // const location = useLocation()
  const navigate = useNavigate()
  const Submit = (e) => {
    e.preventDefault()
    fetch('/api/users/register', {
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
        alert(data.message)
        if (data.success === true) navigate('/login')
      })
  }

  const handleInput = (e) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }
  const hide = () => {
    const password = document.getElementById('password')
    if (password.type === 'text') {
      password.type = 'password'
      document.getElementById('password2').type = 'password'
    } else {
      password.type = 'text'
      document.getElementById('password2').type = 'text'
    }
  }

  return (
    <>
      {/* <h1>User Registration</h1> */}
      <div className="registration-background" id="register">
        <div className="registration-container" >
          <img
            src="pexels-eberhard-grossgasteiger-1366919.jpg"
            alt="img"
            className="registration-image"
          />
          <form method="POST" onSubmit={Submit} className="inside-registration">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter the Full name"
              onChange={handleInput}
              value={user.name}
              className="inp"
              required={true}
              autoComplete="off"
            />
            <input
              type="text"
              name="designation"
              id="designation"
              placeholder="Enter the designation"
              onChange={handleInput}
              value={user.designation}
              className="inp"
              required={true}
              autoComplete="off"
            />
            <input
              type="text"
              name="state"
              id="state"
              placeholder="Enter the state"
              onChange={handleInput}
              value={user.state}
              className="inp"
              required={true}
              autoComplete="off"
            />
            <input
              type="text"
              name="district"
              id="district"
              placeholder="Enter the district"
              onChange={handleInput}
              value={user.district}
              className="inp"
              required={true}
              autoComplete="off"
            />
            <input
              type="text"
              name="area"
              id="area"
              placeholder="Enter the area"
              onChange={handleInput}
              value={user.area}
              className="inp"
              required={true}
              autoComplete="off"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter the email"
              onChange={handleInput}
              value={user.email}
              className="inp"
              required={true}
              autoComplete="off"
            />

            <input
              type="text"
              name="mobile"
              id="mobile"
              inputMode='numeric'
              placeholder="Enter the Mobile Number"
              onChange={handleInput}
              value={user.mobile}
              className="inp"
              autoComplete="off"
            />

            <input
              type="text"
              name="mobileAlt"
              id="mobileAlt"
              inputMode='numeric'
              placeholder="Enter the Alternate Mobile Number"
              onChange={handleInput}
              value={user.mobileAlt}
              className="inp"
              required={true}
              autoComplete="off"
            />

            <input
              type="password"
              name="password"
              id="password"
              onChange={handleInput}
              value={user.password}
              placeholder="Enter the password"
              className="inp"
              required={true}
            />
            <input
              type="password"
              name="password2"
              id="password2"
              onChange={handleInput}
              value={user.password2}
              placeholder="Confirm the password"
              className="inp"
              required={true}
            />
            <div style={{marginLeft : "33px"}}>
              <input
                type="checkbox"
                name="show_password"
                id="show_password"
                onClick={hide}
              />

              <span style={{ color: 'white',marginLeft : "5px" }}>Show Password</span>
              <br />
            </div>
            <button type="submit" className="btn-dark">
              Register
            </button>
          <NavLink to="/login" style={{ textDecoration: 'none' }}>
            <p
              style={{
                textAlign: 'right',
                marginTop: '10px',
                color: 'white',
                textDecoration: 'none',
                gridColumn:"2 / span 2"
              }}
            >
              Already a user? Login then
            </p>
          </NavLink>
          </form>
        </div>
      </div>
    </>
  )
}
