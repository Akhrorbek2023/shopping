import React from 'react'
import Logo from "../assets/images/logoImage1.svg"
import Logo2 from "../assets/images/logoImage2.svg"
import Like from "../assets/icons/heartIcon.svg"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className='container'>
            <div className='flex justify-between items-center py-6'>
                <div className=''>
                   <Link to={"/"} className='flex items-center space-x-2 sm:w-[45px]'>
                   <img src={Logo} alt="Logo" />
                    <img src={Logo2} alt="Logo" />
                   </Link>
                </div>
                <form className='flex'>
                    <input className='border px-5 rounded w-[620px] py-2 sm:w-[150px] sm:px-1' type="search" name="search" id="search" placeholder='Search'/>
                    <button  className='bg-blue-500 px-4 rounded text-white sm:hidden'>Serach</button>
                </form>
                <div className='text-center'>
                   <Link to={"/orders"}>
                   <img className='w-[30px] mx-auto' src={Like} alt="Like" />
                    <h1 className='text-[gray] mx-auto'>Orders</h1>
                   </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar