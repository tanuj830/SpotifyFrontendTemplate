import React from 'react'
import './AccordionComponent.css'
import { Link } from 'react-router-dom'

const Accordion = () => {
    return (
        <>
        <div className=" main container-fluid">
     
        <div className="container">
         
         <div> <h1 >It's free.</h1>
           <h1>No credit card required.</h1>
           </div> 
         
        </div>
    </div>
    <div className=" container">
    <h2 className="text-center my-5" style={{fontSize:49}}> <b> Got Questions? </b></h2>
    
    <div className="accordion" id="accordionExample">
  <div className="accordion-item ">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" style={{color:'black', fontWeight:'bold'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      How do I create a playlist?
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{color:'dimgray', fontWeight:500}}>
      Playlists are a great way to save collections of music, either for your own listening or to share. <br /><br />

To create one: <br /><br />
<div className="text-dark">
1- Tap Your Library. <br />
2- Tap <b>CREATE.</b> <br />
3- Give your playlist a name. <br />
4- Start adding songs (and we’ll help you along). <br /></div>

      </div>
    </div>
  </div>
{/* --------------accordin2---------- */}
  <div className="accordion-item ">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button" style={{color:'black', fontWeight:'bold'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
      How do I activate Data Saver mode?
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{color:'dimgray', fontWeight:500}}>
  

 <br /><br />
<div className="text-dark">
1- Tap <b> Home.</b> <br />
2- Tap <b>Settings.</b> <br />
3- Tap <b> Data Saver.</b> <br />
4- Switch on Data Saver. <br /></div>

      </div>
    </div>
  </div>
{/* ---------------------accordin-3------------- */}
<div className="accordion-item ">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button" style={{color:'black', fontWeight:'bold'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
      Is it only possible to shuffle play music?
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{color:'dimgray', fontWeight:500}}>
       <br /><br />

      Any playlist with the shuffle icon  will play on shuffle. <br /> <br />

Some playlists won't have the shuffle icon, so you can tap any song to play it. <br /><br />

      </div>
    </div>
  </div>
{/* -------------accordin-4------- */}
<div className="accordion-item ">
    <h2 className="accordion-header" id="headingFour">
      <button className="accordion-button" style={{color:'black', fontWeight:'bold'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
      Where can I find Podcasts?
      </button>
    </h2>
    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{color:'dimgray', fontWeight:500}}>
   <br /><br />

      Tap Search  . Under Browse All, tap Podcasts.<br /><br />

      </div>
    </div>
  </div>


 </div>
 


 </div>
 <div className="main2 container-fluid mt-5">
         
         <div className="container">
         
         <div className="text1 row">    
               <h1 className=" text mb-5" >Ready? Let’s play.</h1> </div>
         <div className="row"><Link to="" className="main_butt text-center">GET SPOTIFY FREE</Link></div>

           </div> 
          </div>
 
        </>
    )
}

export default Accordion
