import { number } from 'prop-types'
import React, { useEffect, useState } from 'react'

import style from './CartCheckout.module.scss'

const CartCheckout = ({ totalPrice }) => {
  const [formattedPrice, setFormattedPrice] = useState('0.00')

  useEffect(() => {
    setFormattedPrice((Math.floor(totalPrice * 100) / 100).toFixed(2))
  }, [totalPrice])

  return (
    <div className={style.cartCheckoutContainer}>
      <div className={style.totalPrice}>£{formattedPrice}</div>
      <button className={style.checkoutButton}>Checkout</button>
    </div>
  )
}

CartCheckout.propTypes = {
  totalPrice: number.isRequired
}

export default CartCheckout
