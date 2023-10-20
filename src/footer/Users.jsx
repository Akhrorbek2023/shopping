import React from 'react'
import { Link } from 'react-router-dom'

const Users = () => {
    const user = [
        {
            id:1,
            title: "Login",
            href: ""
        },
        {
            id:2,
            title: "Register",
            href: ""
        },
        {
            id:3,
            title: "Settings",
            href: ""
        },
        {
            id:4,
            title: "My Orders",
            href: ""
        },
    
        
       
    ]
  return (
    <div>
        <h1 className='mb-4 font-[600]'>For Users</h1>
        {
            user?.map((item)=>(
                <Link className='flex mb-1 text-gray-700' key={item.id}>
                {item.title}
                </Link>
            ))
        }
    </div>
  )
}

export default Users