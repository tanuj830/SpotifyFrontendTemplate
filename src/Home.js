import React from 'react'
import"./Home.css"
import Question from "./components/Question"
import Answer from "./components/Answer"
import Directions from "./components/Directions"

const ques=[
  {
    id:"1",
    q:"who is indias president",
    a:"modi",
    b:"papu",
    c:"yogi",
    d:"crazywal"
  },
  {
    id:"1",
    q:"national fruit of india",
    a:"palm",
    b:"litchi",
    c:"mango",
    d:"papaya"
  }
]


 {
     for (let i = 0; i < 2; i++) {
          var question=ques[0].q  
          var a= ques[0].a   
          var b= ques[0].a                   
          var c= ques[0].b 
          var d= ques[0].d 

}
               }
              
               function next(i)
               {
                   i++;
               }
               function previous(i)
               {
                   i++;
               }
const Home = () => {
    return (
        <>
        <div className="topdiv" style={{height:593}}>
           <div className="container main">
               <div className="mainn">
               <div className="mt-4">
          <div className="bg-warning rounded mx-2 mb-2" style={{height:38}}>lorem40wjnekjhdjhshdjshdjkhsakjdhkjashkjhskjfhdjhfkjsahjkfhakdhkjsahj</div>
        </div>


        <div className="mt-4 mb-5">
          <div className="aaa rounded mx-2 mb-2" >a</div>
          <div className="aaa rounded mx-2 mb-2" >a</div>
          <div className="aaa  rounded mx-2 mb-2" >a</div>
          <div className="aaa  rounded mx-2 mb-2" >a</div>
        </div>

              
                   <div className="dir">
        <span className="mx-2 px-2" onClick={previous}>Previous</span>
        <span className="mx-2 px-2" onClick={next}> Next </span>
        </div>
               </div>
           </div> 
        </div>
        </>
    )
}

export default Home
