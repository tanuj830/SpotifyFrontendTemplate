import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import  "./premium.css";
import {Link} from 'react-router-dom';

const Premium = () => {
    return (
        <>
                   <Header />
      <section className="section1">
          <div className="cont1 container">
                 <div className="row">
   <h2 className="section1h2 text-center">Get Premium for the whole family</h2>
                 </div> 
                 <div className="row">
   <h3 className="section1h3 text-center">Family members living under one roof can enjoy up to 6 Premium accounts.</h3>
                 </div> 
                 <div className="row">
   <h3 className="section1h33 text-center">One-time plans from ₹199</h3>
                 </div> 
                 <div className="row">
                     <div className="col-6" style={{paddinfgRight:0}}>
                    <button className="btn1">GET PREMIUM FAMILY</button>
                     </div>
                     <div className="col-6">
                    <button className="btn2">SEE OTHER PLANS</button>
                     </div>
                 </div>
                 <div className="row mt-4 ">
                  <Link style={{color:"black"}}  className="text-center mb-5" to="">Terms and conditions apply</Link></div>
          </div>
      </section>

          {/* -----------------------section-2-------------------- */}
      <section className="section2">
          <div className="cont2 container">
                  <div className="row">
                      <h1 className="section2h1 text-center">Introducing Premium Mini</h1>
                  </div>
                  <div className="row">
                      <h3 className="section2h3 text-center mt-4">₹7 for 1 day.</h3>
                  </div>
                  <div className="row">
                      <h3 className="section2h33 text-center">₹25 for 1 week.
</h3>
                  </div>
                  <div className="row">
                  <div className="text-center">  <button className="section2btn ">GET MINI</button></div>
                    
                  </div>
                  <div className="row mt-4 ">
                  <Link style={{color:"black"}} className="text-center mb-5" to="">Terms and conditions apply</Link></div>
        
          </div>
      </section>

      <section className="section3">
          <div className="container">
                  
          </div>
      </section>

      <section className="section4">
          <div className="container">
                  
          </div>
      </section>
      
<Footer /> 
      
        </>
    )
}

export default Premium
