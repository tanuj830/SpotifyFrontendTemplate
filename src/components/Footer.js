import React from 'react'
import'./Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
     <div className=" foot container-fluid" >
         <div className="footer_container_one container d-flex">
         <div className="" style={{marginTop:32}}>
    <img style={{width:140 , height:45, color:"white"}} src="/images/download.png" alt="" />
         </div>

 <div className="companyy" style={{marginTop:60}}>
   <h5 style={{color:'grey',fontSize:13}}>COMPANY</h5>
     <Link className="company " to="/about">About</Link><br /><br />
     <Link className="company" to="/jobs">Jobs</Link><br /><br />
     <Link className="company" to="/for the record">For the Record</Link>
 </div>

 <div className="communites" style={{marginTop:60}}>
 <h5 style={{color:'grey', fontSize:13}}>COMMUNITIES</h5>
     <Link className="company" to="/about">For Artists</Link><br /><br />
     <Link className="company" to="/jobs">Developers</Link><br /><br />
     <Link className="company" to="/for the record">Advertising</Link><br /><br />
     <Link className="company" to="/about">Investors</Link><br /><br />
     <Link className="company" to="/jobs">Vendors</Link>
 </div>

 <div className="useful_links" style={{marginTop:60}}>
 <h5 style={{color:'grey',fontSize:13}}>USEFUL LINKS</h5>
 <Link className="company" to="/about">Support</Link><br /><br />
     <Link className="company" to="/jobs">Web Player</Link><br /><br />
     <Link className="company" to="/for the record">Free Mobile App</Link><br /><br />
 </div>

<div className="social_handels" style={{marginTop:60}}>
   {/* <img src="/images/insta.png" alt="" /> */}
   <i className=" insta fab fa-instagram "></i>
   <i className="twit fab fa-twitter"> </i>
    <i className="fb fab fa-facebook"> </i>
</div>

         </div>
         <div className=" con container d-flex justify-content-between mt-5">
             <div>
            <Link className="texthov"  to="">Legal</Link>
            <Link className="texthov" to="">Privacy Center</Link>
            <Link className="texthov"  to="">Privacy Policy</Link>
            <Link className="texthov" to="">Cookies</Link>
        <Link className="texthov" to="">About Ads</Link>
             </div>

             <div>
             <i className="fas fa-globe" style={{color:"grey",fontSize:12}}></i><Link style={{textDecoration:"none",fontSize:13,marginLeft:6}}>English(IN)</Link><br />
            <h6 style={{color:"grey",fontSize:12}}>© 2021 Spotify AB</h6> 
             </div>

         </div>
     </div>

  {/* <div style={{ backgroundColor: "#1c2e4a", marginTop: 1000 }} className="container-fluid">
                <h1 className="light">hshuhujhqh</h1>
            </div> 
            <div style={{ backgroundColor: "#152238",flexDirection:'column',height:150 }} className="d-flex  container-fluid">
               <div><h1 className="text-light">jshxjhj</h1></div>
                <div style={{marginLeft:147, marginTop:10,display:"flex"}}>
                    <div><a style={{ fontSize: 12, color: 'lightgray', textDecoration: "none", marginLeft: 19 }} href="">Condition of Use &Sale</a></div>
                    <div><a style={{ fontSize: 12, color: 'lightgray', textDecoration: "none",marginLeft: 19 }} href="">Privacy Notice</a></div>
                    <div><a style={{ fontSize: 12, color: 'lightgray', textDecoration: "none", marginLeft: 19 }} href="">Internet-Based Apps</a></div>
                    <div><p style={{ fontSize: 13, color: 'lightgray', marginLeft: 19, marginTop: 3 }}>&#169;1996-2021, AmazonClone.com, Inc. or its affiliates</p></div>
                </div>

            </div> */}

        </>
    )
}

export default Footer
