import React, { useContext } from 'react'
import { userDataContext } from './context/UserContext'
import NavBar from './components/NavBar'

const App = () => {

const data = useContext(userDataContext)
console.log(data)
  return (
    <div>

      <NavBar/>

      <h1>Hello Doston my self - {data}</h1>
    </div>
  )
}

export default App