import React, { useEffect, useState } from 'react'
import { Gamepad, Search, User } from 'lucide-react';
import { NavLink, useSearchParams } from 'react-router';

const NavBar = () => {

 const [value, setvalue] = useState('')
 const [searchParams,setsearchparams] = useSearchParams()

 useEffect(()=>{

 const timer = setTimeout(() => {
   setsearchparams(prev=>{
   const params = new URLSearchParams(prev)
    
   if(value){
    params.set("search",value)
   }
   else{
    params.delete("search")
   }

   params.set("page",1)
    return params
  })
 },500);

 return clearTimeout('timer')

 },[value])

  return (
   <div>
     <div className='w-full flex items-center justify-between px-8 py-2 text-white'>
   <div className='flex items-center gap-3'>
  <Gamepad size={20}/>
  <h1>Gamelist</h1>
   </div>
   <div className='flex items-center gap-5'>
    <NavLink className='text-lg font-bold' to='/'>Home</NavLink>
    <NavLink className='text-lg font-bold' to='/games'>Games</NavLink>
    <NavLink className='text-lg font-bold' to='/favrouite'>Favrouite</NavLink>
   </div>
   <div className='flex items-center gap-3 '>
    <div className='bg-[#111111] flex rounded-md px-4 w-60 items-center gap-2'>
       
         <input
         value={value}
      type="text"
      placeholder="Search games..."
       onChange={(e)=>setvalue(e.target.value)}
      className="bg-neutral-900 text-white px-4 py-2 rounded w-full"
    />

    </div>
    <User size={20}/>
   </div>
    </div>
    <div className='w-full border-[1px] mt-2 border-zinc-500  '></div>
   </div>
  )
}

export default NavBar