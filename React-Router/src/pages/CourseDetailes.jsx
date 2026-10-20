import React from 'react'
import { useParams } from 'react-router'

const CourseDetailes = () => {
  const params = useParams()
  console.log(params)

  return (
    <div className='text-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-x-1/2' >CourseDetailes</div>
  )
}

export default CourseDetailes