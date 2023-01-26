import './Header.css'
import './rightheader.css'
import{Link} from 'react-router-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Support from '../pages/Support';
// import Home from '../pages/Home'; 

const Rightheader = () => {

  
    return (
        <>
          


            <div className="nav" id="">
           <span className="header_span"><Link className="forhover"  to="/Premium">Premium</Link> </span>

               <span className="header_span"><Link className="forhover" to="/Support"> Support</Link></span>

               <span className="header_span"><Link className="forhover" to="/Download">Download</Link> </span>

               <span className="forhover header_span text-light"> |</span>

               <span className="header_span"><Link className="forhover" to="/Signin">Sign up</Link> </span>

               <span className="header_span"><Link className="forhover"  to="/Login">Log in</Link> </span>
               </div>  



{/* ------------hamburger for responsive website---------- */}
        <button className="hamburger-icon btn-light h-25 mt-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i className="fas fa-bars "></i></button>

<div className="offcanvas offcanvas-end" style={{backgroundColor:"black",width:470}}  id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div className="offcanvas-header d-flex flex-item-column">
    {/* <h5 id="offcanvasRightLabel">Offcanvas right</h5> */}
 
    <button type="button" className="btn-close text-reset bg-light" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body maindiv">
 <span ><Link  id="offcanvasRightLabel" className="nav-links " to="">Premium</Link></span> 
  <span style={{marginTop:5}}><Link  id="offcanvasRightLabel" className="nav-links " to="">Support</Link></span>
      <span style={{marginTop:5}}> <Link className="nav-links" to="">Download</Link></span>
      
      <span style={{marginBottom:10,fontWeight:900}} className="text-light">____</span>
      <span style={{marginTop:18}}> <Link className="links "  to="">Sign up</Link></span>
      
      <span style={{marginTop:10}}> <Link className="links"  to="">Log in</Link></span>
      
     <span className="mobile-logo-section">
         <img className="mobile-logo" src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png" alt="" />
     </span>
     <br />
     <br />
  </div>
</div>
        
      
 
        </>
    )
}

export default Rightheader
