import React, { createContext } from 'react'

export const userDataContext = createContext()

const UserContext = ({children}) => {
    console.log(children)

    const user = 'memeon'
  return (
   <userDataContext.Provider value={user}>
    {children}
   </userDataContext.Provider>
  )
}

export default UserContext