import React from 'react';
import {Blog,Footer,Possibility,Feature,WhatGPT,Header, Features} from "./containers";
import {CTA,Navbar,Brand}from "./components";
import "./App.css"
const App = () => {
  return (
    <div  className='App'>
<div className='gradient__bg'>
 <Navbar/>
 <Header/>


</div>

<Brand/>
<WhatGPT/>
<Features/>
<Possibility/>
<CTA/>
<Blog/>
<Footer/>
    </div>
  )
}

export default App
