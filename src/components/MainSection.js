import React from 'react'
import './mainsection.css'
import { Link } from 'react-router-dom'

const MainSection = () => {
  return (
    <>
      <div className="header_main container-fluid">
        <div className=" cont conatiner d-flex">
          <div className="photo_section">
            <img src="/images/ph.png" alt="Spotify Mobile" />
          </div>

          <div className="text_section">
            <h1 className=" heading text-light">Play millions of songs <br />
              and podcasts, for free.
            </h1>

            <div className="d-flex flex-column ">
              <span><Link to="" className="main_button">GET SPOTIFY FREE</Link></span>
           
                            {/* -------------scrolling-------------- */}
{/* <span className=" rounded" style={{marginTop:220,display:"inline-block"}}>
<a href="#ccc" ><i className="fas fa-chevron-circle-down" style={{fontSize:50,borderRadius:30 , border:"solid white 2px"}}></i></a>
</span> */}
            </div>
          
 
          </div>
        </div>

    
      </div>
{/* ---------------------------------------------------------------------------------- */}





{/* -------------------------------------------------------------------------------- */}
      <div id="ccc" className="container">
        <h3 className="text-center mt-5" style={{ fontSize: 50, fontWeight: "bold" }}>Why Spotify?</h3>
        <div className="dib">
          
          <div className="d-flex flex-column" style={{alignItems:"center"}}>
            <span><img style={{width:190}} src="https://www.transparentpng.com/thumb/circle/DDkf8w-black-circle-clipart-file.png" alt="Black Circle Clipart File @transparentpng.com"/></span>
            <span className="mt-5 text-center">
              <h3> <b>Play your favorites.</b> </h3>
              <p className="mt-3" style={{fontSize:17,fontWeight:600 ,color:"grey,marginTop:100"}}>Listen to the songs you love, and <br /> discover new music and podcasts.</p>
            </span>
          </div>


          <div className="d-flex flex-column" style={{alignItems:"center"}}>
          <span><img style={{width:190}} src="https://www.transparentpng.com/thumb/circle/DDkf8w-black-circle-clipart-file.png" alt="Black Circle Clipart File @transparentpng.com"/></span>
            <span className="mt-5 text-center">
              <h3> <b>Playlists made easy.</b> </h3>
              <p className="mt-3" style={{fontSize:17,fontWeight:600 ,color:"grey,marginTop:100"}}>We'll help you make playlists. Or <br /> enjoy playlists made by music <br /> experts.</p>
            </span>
          </div>


          <div className="d-flex flex-column" style={{alignItems:"center"}}>
          <span><img style={{width:190}} src="https://www.transparentpng.com/thumb/circle/DDkf8w-black-circle-clipart-file.png" alt="Black Circle Clipart File @transparentpng.com"/></span>
            <span className="mt-5 text-center">
              <h3> <b> Make it yours.</b></h3>
              <p className="mt-3" style={{fontSize:17,fontWeight:600 ,color:"grey,marginTop:100"}}>Tell us what you like, and we'll <br /> recommend music for you.</p>
            </span>
          </div>


          <div className="d-flex flex-column" style={{alignItems:"center"}}>
          <span><img style={{width:190}} src="https://www.transparentpng.com/thumb/circle/DDkf8w-black-circle-clipart-file.png" alt="Black Circle Clipart File @transparentpng.com"/></span>
            <span className="mt-5 text-center"><h3> <b>Save mobile data.</b> </h3>
              <p className="mt-3" style={{fontSize:17,fontWeight:600 ,color:"grey,marginTop:100"}}>To use less data when you play <br /> music, turn on Data Saver in <br />  Settings.</p>
            </span>
          </div>






        </div>
      </div>

    </>
  )
}

export default MainSection
