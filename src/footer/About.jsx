import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
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
        <h1 className='mb-4 font-[600]'>About</h1>
        {
            about?.map((item)=>(
                <Link className='flex text-gray-700 mb-1' key={item.id}>
                {item.title}
                </Link>
            ))
        }
    </div>
  )
}

export default About