import { createContext, useState } from 'react'

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const { modal, setModal } = useState(null)

  return (
    <AppContext.Provider value={(modal, setModal)}>
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }
