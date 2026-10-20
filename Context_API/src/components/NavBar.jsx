import React, { useContext } from 'react'
import { userDataContext } from '../context/UserContext'

const NavBar = () => {


     const data = useContext(userDataContext)
  return (
    <div>NavBar - {data}</div>
  )
}

export default NavBar