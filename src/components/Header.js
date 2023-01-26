import React from 'react'
import './Header.css'
import Rightheader from './Rightheader'
import { BrowserRouter as Router, Link,Route } from 'react-router-dom'
const Header = () => {

    {
  

    return (
        <>
            <div className="header_container container-fluid ">
               <div className="container d-flex justify-content-between">
<div> <span>
   <Link to="/"><img className="logo" src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png" alt="logo" /> </Link>
   </span></div>
  
  <Route path="/" exact></Route>
          <Rightheader /> 

               </div>
              
</div>
        </>
    )
}
}
export default Header
