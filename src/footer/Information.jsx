import React from 'react'
import { Link } from 'react-router-dom'

const Information = () => {
    const info = [
        {
            id:1,
            title: "Help Center",
            href: ""
        },
        {
            id:2,
            title: "Money Refund",
            href: ""
        },
        {
            id:3,
            title: "Shipping",
            href: ""
        },
        {
            id:4,
            title: "Contact Us",
            href: ""
        },
        
       
    ]
  return (
    <div>
        <h1 className='mb-4 font-[600]'>Informations</h1>
        {
            info?.map((item)=>(
                <Link className='flex text-gray-700 mb-1'>
                {item.title}
                </Link>
            ))
        }
    </div>
  )
}

export default Information