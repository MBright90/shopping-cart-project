import { object } from 'prop-types'
import React, { createContext, useEffect, useState } from 'react'

const activeVoucherCodes = { mbright90: 0.1, superstarmanson: 0.05 }

export const cartContext = createContext()

const CartContextProvider = ({ children }) => {
  const [cartContents, setCartContents] = useState([])
  const [isShowing, setIsShowing] = useState(false)
  const [activeDiscount, setActiveDiscount] = useState(0)

  const [totalPrice, setTotalPrice] = useState(
    cartContents.length > 0 ? cartContents.reduce((product) => product.price * product.quantity) : 0
  )

  // Sets current total price on any cart contents change
  useEffect(() => {
    console.log(activeDiscount)
    setTotalPrice(
      cartContents.length > 0
        ? cartContents.reduce((total, product) => total + product.price * product.quantity, 0) *
            (1 - activeDiscount)
        : 0
    )
  }, [activeDiscount, cartContents])

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

  const applyDiscountCode = (discountCode) => {
    const discountAppliedFor = activeVoucherCodes[discountCode.toLowercase()]
      ? activeVoucherCodes[discountCode]
      : 0
    if (discountAppliedFor > activeDiscount) {
      setActiveDiscount(discountAppliedFor)
      return true
    }
    return false
  }

  const removeProductFromCart = (productId) => {
    const tempCart = [...cartContents]
    const productIndex = tempCart.findIndex((product) => product.id === productId)
    tempCart.splice(productIndex, 1)
    setCartContents(tempCart)
  }

  const updateCartQuantity = (productId, newQuantity) => {
    const productIndex = cartContents.findIndex((product) => product.id === productId)
    const tempCartContents = [...cartContents]
    tempCartContents[productIndex].quantity = newQuantity
    setCartContents(tempCartContents)
  }

  const contextValue = {
    addProductToCart,
    removeProductFromCart,

    activeDiscount,
    applyDiscountCode,
    cartContents,
    totalPrice,

    isShowing,
    setIsShowing,

    setActiveDiscount,
    updateCartQuantity
  }

  return <cartContext.Provider value={contextValue}>{children}</cartContext.Provider>
}

CartContextProvider.propTypes = {
  children: object.isRequired
}

export default CartContextProvider
