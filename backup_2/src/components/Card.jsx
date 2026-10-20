import React from 'react'
import { useState } from 'react'

const Card = ({postData,  like, dislike}) => {

console.log(postData)

   
  return (
    <div className='w-full flex gap-5'>
      {postData.map((item)=>(
        <div key={item.id} className='card px-5 flex flex-col justify-center items-center w-60 h-60 bg-zinc-600 rounded-md'>
        <img className='w-20 h-20 rounded-full ' src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <h1>{item.name}</h1>
          <p>{item.desc}</p>
          <p>likeCount : {item.likeCount}</p>
          <div className='w-full flex gap-2'>
          <button onClick={()=>like(item.id)} className='px-8 py-3 bg-blue-500 rounded-md'>Like</button>
          <button onClick={()=>dislike(item.id)} className='px-8 py-3 bg-red-500 rounded-md'>Dislike</button>
          </div>
      </div>
      ))}
    </div>
  )
}

export default Card
