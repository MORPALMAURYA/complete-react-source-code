import React, { useRef } from 'react'
import { useState } from 'react'

const App = () => {
 
  console.log('app rendering')

  const inputRef = useRef({})
  console.log(inputRef)

  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <form onSubmit={(e)=> e.preventDefault()} className='w-60 h-60 bg-gray-300 rounded-md flex flex-col items-center justify-center gap-5'>
        <input name='name'
         ref={(e)=> inputRef.current.name = e}  className='border p-2 rounded-md' type="text" placeholder='Enter your Name' />
        <input  ref={(e)=> inputRef.current.email = e}  className='border p-2 rounded-md' type="number" placeholder='Enter Your Age' />
        <input  className='px-8 active:scale-95 py-3 bg-blue-500 rounded-md' type="submit" />
      </form>
      <div>
        
      </div>
    </div>
  )
}

export default App
