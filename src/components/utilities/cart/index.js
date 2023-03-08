import { cartContext } from '@components/app/cartContext'
import React, { useContext } from 'react'

import style from './Cart.module.scss'

const Cart = () => {
  const { cartContents, setIsShowing } = useContext(cartContext)

  return()
}

export default Cart
