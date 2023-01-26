import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from 'react';
const Login = () => {
      // console.log(products);
  
   const products=[
        {
            id:0,name:"tanuj bhatt"
        },
        {
            id:0,name:"sunny bhatt"
        },
        {
            id:0,name:"sandeep bhatt"
        }
    ]
    const [Prod , setProd]=useState(products);
const clrarr=()=>{
    setProd([]);  
}

    return (
        <div>
                     <Header />
<h1>login apge</h1>
{
Prod.map((cure) => <h1> name:{cure.name}</h1>)
    }
<button className="btn" onClick={clrarr}>clear</button>

<Footer /> 
        </div>
    )
}

export default Login
