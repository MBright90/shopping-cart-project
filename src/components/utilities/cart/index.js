import { cartContext } from '@components/app/cartContext'
import React, { useContext } from 'react'

import style from './Cart.module.scss'

const Cart = () => {
  const { cartContents, isShowing, setIsShowing } = useContext(cartContext)
  console.log(cartContents)

  return (
    <div>
      <div
        className={`${style.cartOverlay} ${isShowing ? style.overlayShowing : null}`}
        onClick={() => {
          setIsShowing(false)
        }}
        onKeyDown={(e) => {
          if (e.code === 'Enter') setIsShowing(false)
        }}
      ></div>
      <div className={`${style.cart} ${isShowing ? style.cartShowing : null}`}>
        <h1 className={style.cartTitle}>Your Cart</h1>
      </div>
    </div>
  )
}

export default Cart
