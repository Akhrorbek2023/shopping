import React from 'react'
import Store from "../assets/images/storeImage.svg"
import Play from "../assets/images/playImage.svg"
import { Link } from 'react-router-dom'

const AppStore = () => {
  return (
    <div>
        <h1 className='mb-4 font-[600]'>Get app</h1>
        <Link className=''>
        <img className='mb-2' src={Store} alt="store" />
        </Link>
        <Link>
        <img src={Play} alt="play" />
        </Link>
    </div>
  )
}

export default AppStore