import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import './signin.css';
import { Link } from 'react-router-dom';
const Signin = () => {
    return (
        <div >
          <Header/>
          <div className="container-fluid text-center">

         
      <div className="container" style={{marginTop:100}}>
     
     <div className="row">
 <div className="text-center">
<img className="logoimg " src="/images/blog.png" alt="ef" />
       </div>
     </div> 

       <div className="row">
  <h1 className="text1 text-center">Sign up for free to start listening.</h1>
       </div>

       <div className="row">
       <div className="text-center"><button className="firstbtn text-light bg-primary">Sign up with Facebook</button></div>

       </div>

       <div className="row text-center mt-4">
      <h6>By clicking on sign-up, you agree to Spotify's <Link className="link1">Terms and Conditions of Use.</Link></h6>
       </div>

       <div className="row text-center mt-1">
<h6>
To learn more about how Spotify collects, uses, shares and protects your <br /> personal data, please see <Link className="link2">Spotify's Privacy Policy.</Link> 
</h6>
       </div>
       

       <div className="row mt-1">
   <span className="text-center " style={{color:"grey"}}>________________ or___________________</span>
       </div>

     {/* ---------form------ */}
       <div className="row mt-3">
<div className="d-flex div1 text-center">
<div>
  <h3 className="text2">What's your email?</h3>
</div>
<div><input className="email" type="e-mail"name="" id="" placeholder="Enter your email." required></input></div>
</div>
   </div>

   <div className="row mt-3">
<div className="d-flex div1 text-center">
<div>
  <h3 className="text2">Confirm your email</h3>
</div>
<div><input className="email" type="e-mail"name="" id="" placeholder="Enter your email again." required></input></div>
</div>
   </div>
  

   
   <div className="row mt-3">
<div className="d-flex div1 text-center">
<div>
  <h3 className="text2"> Create a password</h3>
</div>
<div><input className="email" type="e-mail"name="" id="" placeholder=" Create a password." required></input></div>
</div>
   </div>
  

   <div className="row mt-3">
<div className="d-flex div1 text-center">
<div className="text-center">
  <h3 className="text2" style={{ marginLeft:360}}> What should we call you?</h3>
</div>
<div><input className="email"  type="e-mail"name="" id="" placeholder="Enter your profile name." required></input></div>
</div>
   </div>
<br /><br /><br /><br />
       <div className="row">

       </div>

       <div className="row">

       </div>
      </div>     
       </div>
     <Footer/>
        </div>
    )
}

export default Signin
