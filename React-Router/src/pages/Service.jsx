import React from 'react'
import { Link, Outlet } from 'react-router'

const Service = () => {
    Link
  return (
    <>
    <div className='flex items-center mt-20 justify-center gap-10'>
     <Link to='/service/mobile' className='underline'>Mobile</Link>
     <Link to='/service/lappy' className='underline'>Laptop</Link>
    </div>
      
      <Outlet/>
    </>
  )
}

export default Service