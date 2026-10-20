import React from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementValueByUserInput } from './redux/features/CounterSlice'
const App = () => {

   
   const data = useSelector(state=>state.count.value)
   console.log(data)


  const dispatch = useDispatch()
   

   const handleIncrement = ()=>{
     dispatch(increment())
   }


   const handleDecrement = ()=>{
      dispatch(decrement())
   }

   const incrementByuserInput=()=>{
     dispatch(incrementValueByUserInput(12))   
   }
  return (
    <div>
        <h1>Counter - {data}</h1>
        <button onClick={handleIncrement}>Increment By 1</button>
        <button onClick={handleDecrement}>Decrement By 1</button>
           <button onClick={incrementByuserInput}>By user Input </button>
    </div>
  )
}

export default App