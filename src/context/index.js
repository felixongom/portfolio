import { createContext, useContext, useState } from 'react'
const Context = createContext()
function ContextProvider({children}) {
    const[active, setActive] = useState('Hero')
    const[openNavBar, setOpenNavBar] = useState(false)
    
    return (
    <Context.Provider
    value={{
        active,
        setActive,
        openNavBar,
         setOpenNavBar
    }}
    >{children}</Context.Provider>
  )
}

export default ContextProvider
export const useStateContext = ()=> useContext(Context)