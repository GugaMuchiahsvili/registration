import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Link,
  BrowserRouter
} from 'react-router-dom'

function Login() {
  

  return (
    <div className="App">
      <div className="container">
        <div className="left">
          <div className="black"></div>
          <img src="icon.png" alt="" />
          <div className="header">
            <h2>Login</h2>
          </div>
          <div className="main">
            <input type="text" placeholder='Username' />
            <input type="password" placeholder='password'/>
          </div>
          <div className="footer">
            <button>Login</button>
            <Link to="/">dont you have an account? Sign up</Link>
          </div>
        </div>
        <div className="right">
          <div className="white"></div>
          <img src="logo.png" alt="" />
          {/* <div className="txt">
            <ul>
              <li className='li4'>Great</li>
              <li className='li3'>Place</li>
              <li className='li2'>For</li>
              <li>Rest</li>
            </ul>
          </div> */}
          <div className="info">
            <h1>great place for your rest</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login