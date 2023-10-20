import React from 'react'
import { Link } from 'react-router-dom'

const Partnership = () => {
    const about = [
        {
            id:1,
            title: "About Us",
            href: ""
        },
        {
            id:2,
            title: "Find Store",
            href: ""
        },
        {
            id:3,
            title: "Categories",
            href: ""
        },
        {
            id:4,
            title: "Blogs",
            href: ""
        },
        
       
    ]
  return (
    <div>
        <h1 className='mb-4 font-[600]'>Partnership</h1>
        {
            about?.map((item)=>(
                <Link className='flex mb-1 text-gray-700'>
                {item.title}
                </Link>
            ))
        }
    </div>
  )
}

export default Partnership