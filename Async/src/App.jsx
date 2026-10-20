import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { fetchData } from './redux/slice/userSlice'

const App = () => {


 const data =  useSelector(state=>state.user)
 console.log(data)

const dispatch = useDispatch()
 const getProductData=()=>{

  dispatch(fetchData())

 }

  return (
    <div>
    
    <button onClick={getProductData}>Get Data</button>
    
    </div>
  )
}

export default App