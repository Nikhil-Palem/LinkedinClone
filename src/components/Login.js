import React, { useState } from 'react'
import './Login.css'
function Login() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [url, setProfileUrl] = useState('')
  const [password, setPassword] = useState('')
  function register() {
    if(!name){
      alert('please provide full name');
    }
  }
  function login(e) {
    e.preventDefault();
  }
  return (
    <div className='logincontainer'>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png" alt="" srcset="" />
      <form>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder='Full Name (required if registering)' type="text" />
        <input value={url} onChange={(e) => setProfileUrl(e.target.value)} placeholder='Profile pic URL(optional)' type="text" />
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' type="email" />
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="" id="" placeholder='Password' />
        <button type='submit' onClick={login}>Sign In</button>
      </form>
      <p>Not a member?
        <span className='register' onClick={register}> Register Now</span>
      </p>
    </div>

  )
}

export default Login