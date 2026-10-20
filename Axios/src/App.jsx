import React, { useEffect, useState } from 'react'
import axios from 'axios'


const App = () => {

 const [Data, setData] = useState([])
 const [Page, setPage] = useState(1)

  const getData = async ()=>{
    const data = await axios.get('https://picsum.photos/v2/list' ,{
      params:{
        page:Page,
        limit:10
      }
    })
    setData(data.data)
    
  }
 console.log(Data)
 useEffect(()=>{
  getData()

 },[Page])



  return (
    <div className='p-5'>

      <div className='mt-5 flex flex-wrap gap-5 p-2'>
       {Data.map((item)=>{
       return  <div key={item.id} className='w-40  h-40 bg-zinc-300 rounded-md '>
            <img className='w-40 h-30 rounded-md object-cover' src={item.download_url} alt="" />
            <h1>{item.author}</h1>
        </div>
})}
      </div>


      <button  onClick={()=>setPage(Page-1)}>Prev</button>
            <button onClick={()=>setPage(Page+1)}>Next</button>
    </div>
  )
}

export default App