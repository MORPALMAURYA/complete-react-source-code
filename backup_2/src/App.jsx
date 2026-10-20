import React from 'react'
import { useState } from 'react'
import Card from './components/Card'

const App = () => {
  
  const [postData, setpostData] = useState([{
    id:1,
    name:"ritik",
    desc:"edjfbwefjbwe",
    likeCount: 1,

},
{
  id:2,
  name:"vatsal",
  desc:"edjfbwefjbwe",
  likeCount: 1,

}])


// refrence -(),{},[]


const like = (id)=>{
 setpostData((prev)=>prev.map((item)=> 
 item.id === id ? {...item,likeCount:item.likeCount+1}:item))
}

const dislike = (id)=>{
 setpostData((prev)=>prev.map((item=>
  item.id===id && item.likeCount >=1
   ?{...item, likeCount:item.likeCount-1}:item)))
}

  return (
    <div className='px-10 py-5'>
      <Card postData={postData}  like={like} dislike ={dislike}/>
    </div>
  )
}

export default App
