import React, { useEffect, useState } from 'react'
import '../css/navbar.css'
import { Navigate, NavLink, useNavigate } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'
import Typed from 'typed.js'
import image from '../images/gradienta-A8he8ah9suQ-unsplash.jpg'
import { currentUser } from '../App'
import { useContext } from 'react'

function NavbarBoot() {
  const navigate = useNavigate()
  const [user, setUser] = useState('')
  const { state, dispatch } = useContext(currentUser)
  const logout = (e) => {
    e.preventDefault()
    localStorage.removeItem('user')
    window.location.reload()
  }
  useEffect(() => {
    var typed = new Typed('#title', {
      strings: [
        'to connect to needy',
        'to fill your stomach',
        'to decrease the gap',
        'to fight the hunger',
      ],
      startDelay: 300,
      typeSpeed: 50,
      backSpeed: 70,
      backDelay: 500,
      loop: true,
    })
    var hamburger = document.querySelector('input[type=checkbox]')
    var menu = document.querySelector('.navbar-content')
    hamburger.addEventListener('change', () => {
      menu.classList.toggle('active')
    })
    menu.addEventListener('focusout', () => {
      menu.classList.remove('active')
    })
    document.addEventListener("scroll",()=>{
      if(window.scrollY !==0)
      document.querySelector(".navbar-container").classList.add("notTop");
      else{
        document.querySelector(".navbar-container").classList.remove("notTop");
      }
      
    })
    if (localStorage.getItem('user')) {
      dispatch({ type: 'USER', payload: localStorage.getItem('user') })
    }
  }, [user])

  return (
    <>
      <div className="navbar-background" id="navbar">
          <div className="sticky-navbar">
        <div className="navbar-container" >
            <Link smooth to="/#navbar" style={{ textDecoration: 'none' }}>
              <div className="navbar-brand">
                <img src={image} alt="" className="navbar-logo" />
                <h3 className="navbar-brand-title">Anandan</h3>
              </div>
            </Link>
            <ul className="navbar-content" id="content">
              <Link smooth to="/#navbar" style={{ textDecoration: 'none' }}>
                <li className="navbar-link">Home</li>
              </Link>
              <Link smooth to="/about#about" style={{ textDecoration: 'none' }}>
                <li className="navbar-link">About</li>
              </Link>

              {!state && (
                <>
                  <Link
                    smooth
                    to="/login#login-form"
                    style={{ textDecoration: 'none' }}
                  >
                    <li className="navbar-link">Login</li>
                  </Link>

                  <Link
                    smooth
                    to="/register#register"
                    style={{ textDecoration: 'none' }}
                  >
                    <li className="navbar-link">Register</li>
                  </Link>
                </>
              )}

              {state && (
                <>
                  <Link smooth to="/" style={{ textDecoration: 'none' }}>
                    <li className="navbar-link-user">
                      <i class="far fa-user" style={{ width: '200px' }}>
                        <span
                          style={{ fontFamily: 'Roboto', fontWeight: 'bold' }}
                        >
                          {' '}
                          {state}
                        </span>
                      </i>
                    </li>
                  </Link>
                  <Link smooth to="/" style={{ textDecoration: 'none' }}>
                    <li className="navbar-link-logout" onClick={logout}>
                      <i className="far fa-sign-out-alt">
                        <span
                          style={{ fontFamily: 'Roboto', fontWeight: 'bold' }}
                        >
                          {' '}
                          Logout
                        </span>
                      </i>
                    </li>
                  </Link>
                </>
              )}
            </ul>
            <input type="checkbox" name="hamburger" id="hamburger" />
            <label htmlFor="hamburger" className="hamburger-button">
              &#9776;
            </label>
        </div>
          </div>
        <h1 className="home-title">
          A place <span id="title" style={{ textAlign: 'center' }}></span>
        </h1>
      </div>
    </>
  )
}

export default NavbarBoot
