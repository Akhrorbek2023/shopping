import React from 'react'
import Hero from './Hero'
import Sidebar from './Sidebar'

const Header = ({single, setSingle}) => {
  return (
    <div className='bg-gray-100 py-[20px] sm:w-full'>
        <div className='container'>
        <div className='flex sm:block'>
        <Sidebar/>
        <Hero single={single} setSingle={setSingle}/>
        </div>
        </div>
    </div>
  )
}

export default Header