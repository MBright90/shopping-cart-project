import { arrayOf, node, oneOf } from 'prop-types'
import React, { createContext } from 'react'

export const productContext = createContext()

const productDatabase = [
  {
    name: '',
    category: '',
    images: [],
    price: 1099
  }
]

const ProductContext = ({ children }) => {
  const contextValue = {
    productDatabase
  }
  return <productContext.Provider value={contextValue}>{children}</productContext.Provider>
}

ProductContext.propTypes = {
  children: oneOf([node, arrayOf(node)])
}

export default ProductContext
