import React from 'react'
import Facebook from "../assets/icons/facebookIcon.svg"
import Twitter from "../assets/icons/twitterIcon.svg"
import Linkidin from "../assets/icons/linkidinIcon.svg"
import Instagram from "../assets/icons/instIcon.svg"
import YouTube from "../assets/icons/youtubeIcon.svg"
import { Link } from 'react-router-dom'


const Icons = () => {
  return (
    <div className='flex space-x-3'>
        <Link>
        <img className='hover:bg-yellow-700 rounded-[50%]' src={Facebook} alt="Facebook" />
        </Link>
        <Link>
        <img className='hover:bg-yellow-700 rounded-[50%]' src={Twitter} alt="Twitter" />
        </Link>
        <Link>
        <img className='hover:bg-yellow-700 rounded-[50%]' src={Linkidin} alt="Linkidin" />
        </Link>
        <Link>
        <img className='hover:bg-yellow-700 rounded-[50%]' src={Instagram} alt="Instagram" />
        </Link>
        <Link>
        <img className='hover:bg-yellow-700 rounded-[50%]' src={YouTube} alt="YouTube" />
        </Link>
    </div>
  )
}

export default Icons