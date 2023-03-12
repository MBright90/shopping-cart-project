import { object } from 'prop-types'
import React, { createContext, useState } from 'react'

export const modalContext = createContext()

const ModalContextProvider = ({ children }) => {
  const [currentModal, setCurrentModal] = useState(null)

  const contextValue = {
    currentModal,
    setCurrentModal
  }

  return <modalContext.Provider value={contextValue}>{children}</modalContext.Provider>
}

ModalContextProvider.propTypes = {
  children: object.isRequired
}

export default ModalContextProvider
