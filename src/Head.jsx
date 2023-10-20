import React, { useState } from 'react'
import Footer from './footer/Footer'
import Navbar from './navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Header from './header/Header'
import Single from './header/Single'
import Orders from './header/Orders'

const Head = () => {
    const [single, setSingle] = useState([])
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Header single={single} setSingle={setSingle}/>}/>
            <Route path='/single' element={<Single single={single} />}/>
            <Route path='/orders' element={<Orders/>}/>
        </Routes>
        <Footer/>
    </div>
  )
}

export default Head