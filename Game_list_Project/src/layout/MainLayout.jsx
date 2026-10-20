import React from 'react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <div className='min-h-screen w-full bg-[#000000]'>
        <NavBar/>
        <Outlet/>
    </div>
  )
}

export default MainLayout