import { Star } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router'


const Card = ({item}) => {

 const navigate = useNavigate()
  
  return (
    <div className='w-60 mt-20 h-72 bg-[#111111] rounde-lg overflow-hidden'>
      <div className='w-full h-1/2 '>
        <img className='w-full h-full object-cover' src={item.background_image} alt="" />
        
        </div>
       <div className='px-2 py-1'>
        <div className='flex  justify-between w-full'>
         <h1>{item.name}</h1>
         <div className='flex items-center gap-2'>
            <Star size={14} color='yellow'/>
            <h5>4.9</h5>
         </div>
       </div>
       <p className='text-[0.9vw] mt-2 leading-none opacity-90'>Experience Night City as a mercenary outlaw in this open-world</p>
       <button onClick={()=>{
         navigate(`/gamesDetails/${item.id}`)
       }} className='w-[99%] mt-6 px-10 py-2 rounded-xl text-black bg-white text-sm font-bold'>View Details</button>
       </div>
    </div>
  )
}

export default Card