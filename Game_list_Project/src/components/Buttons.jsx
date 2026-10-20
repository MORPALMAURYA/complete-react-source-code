import React from 'react'

const Buttons = () => {
    const title = [
        "All titles","Trendings now","New releaeses","RPG","Actions"
    ]
  return (
    <div className='mt-20 flex gap-5'>
      {title.map((items,idx)=>(
        <button key={idx} className='p-1 active:bg-blue-500 px-6 rounded-full bg-[#262626] '>{items}</button>  
      ))}
    </div>
  )
}

export default Buttons