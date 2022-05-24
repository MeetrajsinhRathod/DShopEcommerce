import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/App.css';

import React, { useState, useEffect } from 'react'
import Nav from "../src/comps/Nav"
import Carousel1 from "../src/comps/carousel1"
import Carousel2 from "../src/comps/carousel2"
import Masks from "../src/comps/masks"
import Shop from "../src/comps/shop_header"
import CsCard from "../src/comps/cs_card"
import About from "../src/comps/about"
import Footer from "../src/comps/footer"

const App = () => {
  return (
    <div>
      <div className='p-1'>
      <Nav/>
      <Carousel1/>
      </div>
      <div className='p-2'>
      <div className="row mb-2 mt-5 ms-3">
      <Masks/>
      <Carousel2/>
      </div>
      </div>
      <div className='p-3'>
      <Shop/>
      <div class="row row-cols-1 row-cols-md-4 g-4">
      <CsCard/>
      <CsCard/>
      <CsCard/>
      <CsCard/>
      <CsCard/>
      <CsCard/>
      <CsCard/>
      <CsCard/>
      </div>
      </div>
      <div className='p-4'>
      <About/>
      <Footer/>
      </div>
    </div>
  )
}

export default App;