import React from 'react'
import { NavLink, useNavigate } from 'react-router'

const NavBar = () => {
  

    const navigate =  useNavigate()

  return (
    <div className='w-full p-5 bg-gray-300 flex justify-between'>

          <h1>Hellyooooo</h1>
        <div className='flex gap-5 items-center'>
            <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/service">Service</NavLink>

        <button onClick={()=>navigate('/auth/register/jqfghj')} className='py-3 px-8 bg-blue-500 rounded-md'>Login</button>
        </div>

    </div>
  )
}

export default NavBar