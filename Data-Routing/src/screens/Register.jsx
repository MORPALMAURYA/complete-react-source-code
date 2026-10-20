import React from 'react'
import { useParams } from 'react-router'

const Register = () => {

   const {id} = useParams()
  return (
    <div>Register - {id}</div>
  )
}

export default Register