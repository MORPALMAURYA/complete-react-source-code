import React, { useContext, useEffect } from 'react'
import { GamesDataContext } from '../context/GamesContext'

const Favourite = () => {

 const {favourite} = useContext(GamesDataContext)

 useEffect(()=>{
 console.log(favourite)
 },[])
     
 if(favourite.length == 0){
 return  <p className='text-white'>No Favourite yet</p>
 }

  return (
    <div className='p-10 text-white'>
     {favourite.map((fav)=>(
      <h1 >hello</h1>
     ))}
    </div>
  )
}

export default Favourite