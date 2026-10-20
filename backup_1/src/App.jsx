import React from 'react'
import Card from './componets/Card'


const App = () => {

const persons = 
[ {
  id:1,
  name:'rohit',
  age:23,
  url:'https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
},
{
  id:1,
  name:'sheik',
  age:23,
  url:'https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
}
]


  return (
   <div className='app'>
   <Card data={persons} staus='follow'/>
   </div>
  
    
  )
}

export default App

