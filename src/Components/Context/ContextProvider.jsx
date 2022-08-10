import React, { createContext, useState } from 'react'

export const DeleteContext = createContext("")

export const ContextProvider = ( {children}) => {

    const [dltTask, setDltTask] = useState(false);

  return (
    <>
       <DeleteContext.Provider value={{dltTask,setDltTask}}>
          {children}
       </DeleteContext.Provider>
    </>
  )
}
