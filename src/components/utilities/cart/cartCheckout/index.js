import { number } from 'prop-types'
import React from 'react'

import style from './CartCheckout.module.scss'

const CartCheckout = ({ totalPrice }) => {
  return (
    <div className={style.checkoutContainer}>
      <div>£{totalPrice}</div>
      <button className={style.checkoutButton}>Checkout</button>
    </div>
  )
}

CartCheckout.propTypes = {
  totalPrice: number.isRequired
}

export default CartCheckout