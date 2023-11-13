import React from 'react'
import { Link } from 'react-router-dom'
export default function NavBar(props) {
  const {displayHome,displayAdd,heading} = props;
  return (
    <div className='flex items-center justify-center bg-black sticky w-full top-0 left-0 z-10'>
        {displayHome && <Link to='/' className=' font-bold m-4 p-3 border-2 rounded-lg w-1/7 text-white hover:border-gray-500'>Home</Link>}
        <h1 className="text-white text-center text-3xl my-2 w-full">{heading}</h1>
        {displayAdd && <Link to='/addcontact' className=' font-bold m-4 p-3 border-2 rounded-lg w-40 text-white text-center hover:border-gray-500'>Add Contact</Link>}
    </div>
  )
}
