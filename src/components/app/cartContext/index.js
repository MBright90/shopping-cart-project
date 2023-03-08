import { array } from 'prop-types'
import React, { createContext, useState } from 'react'

export const cartContext = createContext()

const CartContextProvider = ({ children }) => {
  const [cartContents, setCartContents] = useState([])

  const checkCart = (productId) => {
    if (cartContents.length) return cartContents.find((product) => product.id === productId)
    return false
  }

  const addProductToCart = (product, quantityOrdered) => {
    // Check if an order is already made on this product, if so return false
    // to initiate message to check cart
    if (checkCart(product.id)) return false

    // If no order already for this product, add product and quantity to cart
    const productCopy = { ...product, quantity: quantityOrdered }
    setCartContents([...cartContents, productCopy])
    return true
  }

  const contextValue = {
    addProductToCart
  }

  return <cartContext.Provider value={contextValue}>{children}</cartContext.Provider>
}

CartContextProvider.propTypes = {
  children: array.isRequired
}

export default CartContextProvider
