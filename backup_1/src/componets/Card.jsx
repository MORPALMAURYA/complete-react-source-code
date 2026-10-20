import React from 'react'

const Card = ({data}) => {

  return (
    <div>
        {data.map((item)=>{
            return <div className='card'>
            <img className='image' src={item.url} alt="" />
            <h1>{item.name}</h1>
            <p>{item.age}</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, consequuntur.</p>
           </div>
        })}
    </div>
  )
}

export default Card
