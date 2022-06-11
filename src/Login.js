import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import './Login.css'

import { initializeApp } from 'firebase/app';
import {firebaseConfig} from './firebaseAuth'
import { createUserWithEmailAndPassword, getAuth,signInWithEmailAndPassword } from 'firebase/auth';
import { useStateValue } from './StateProvider';


const Login = () => { 
  const navigate = useNavigate();
  const app = initializeApp(firebaseConfig);
  
const [useremail,setUserEmail] = useState('')
const [userpassword,setUserPassword ] = useState('')
const auth = getAuth();
const loginuser = (e) =>{
  e.preventDefault();
  createUserWithEmailAndPassword(auth,useremail,useremail)
  .then(auth =>{
    if(auth){
      navigate('/');
    }
  })
  .catch(error => alert(error.message));
 
  
}
const register = (e) => {
  e.preventDefault();
  createUserWithEmailAndPassword(auth,useremail,useremail)
  .then(auth =>{
    if(auth){
      navigate('/');
    }
  })
  .catch(error => alert(error.message));
}

  return (
    <div className='login'>
        <Link to="/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" className="login__logo"/>
            </Link>
      <div className='login__container'>
      <h1>sign in</h1>
      <form>
          <h5>E-mail</h5>
          <input value={useremail} onChange ={event =>setUserEmail(event.target.value)} type="email" />
          <h5>password</h5>
          <input value={userpassword} onChange={event =>setUserPassword(event.target.value)} type="password" />
          <button onClick={loginuser} className='login__signInButton' type='submit' >Sign in</button>
      </form>
      <p>By signing-in,you agree to amazon's Terms and conditions</p>
      <button onClick={register} className='login__registerButton'>create your amazon account</button>
      </div>
    </div>
  )
}

export default Login
