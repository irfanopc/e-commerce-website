
import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Header from "./Header"
import Login from './Login';
import Home from './Home';
import Checkout from './Checkout';
import Footer from './Footer';



function App() {


  return (
    <Router>
    <div className='App'>
    
      <Routes>
      
      
      <Route path='/login' element={<Login/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/' element=  {<Home/>} />
        
       </Routes>
       {<Footer/>}
   </div>
   </Router>
  );
}

export default App;