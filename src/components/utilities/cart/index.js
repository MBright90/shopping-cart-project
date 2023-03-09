import { cartContext } from '@components/app/cartContext'
import React, { useContext } from 'react'

import style from './Cart.module.scss'
import CartCheckout from './cartCheckout'
import CartProduct from './cartProduct'

const Cart = () => {
  const { cartContents, isShowing, setIsShowing, totalPrice } = useContext(cartContext)

  const removeProduct = () => {
    console.log('remove me')
  }

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
        {cartContents.length <= 0 ? (
          <div className={style.emptyCart}>
            <p>You have no items in your cart</p>
          </div>
        ) : (
          <React.Fragment>
            <div className={style.cartProducts}>
              {cartContents.map((product) => (
                <CartProduct product={product} removeProduct={removeProduct} key={product.id} />
              ))}{' '}
            </div>
            <CartCheckout total={totalPrice} />
          </React.Fragment>
        )}
      </div>
    </div>
  )
}

export default Cart
