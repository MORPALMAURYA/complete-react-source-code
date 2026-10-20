import React, { useEffect } from 'react'
import { api } from '../config/api'
import Buttons from '../components/Buttons'
import Card from '../components/Card'
import { useLoaderData } from 'react-router'


const Home = () => {
 
 const data= useLoaderData()
 console.log(data)
  
  return (
    <div className='w-full min-h-screen text-white p-5'>
      <div className=''>
        <h1 className='text-5xl font-bold mb-2 tracking-tight'>Explore the Metaverse</h1>
        <p  className='text-xl font-light w-[45%] leading-none'>Discover your next obsession from our meticulously curated database of the world's most legendary titles.</p>
      </div>
      <Buttons/>
      <div className='w-full flex flex-wrap gap-4'>
        {data.results.map((item)=>(
          <Card item={item} key={item.id}/>
        ))}
      </div>
    </div>
    
  )
}

export default Home