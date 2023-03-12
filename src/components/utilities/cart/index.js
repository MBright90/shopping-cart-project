import { cartContext } from '@components/app/cartContext'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
        onClick={() => setIsShowing(false)}
        onKeyDown={(e) => {
          if (e.code === 'Enter') setIsShowing(false)
        }}
      ></div>

      <div className={`${style.cart} ${isShowing ? style.cartShowing : null}`}>
        <h1 className={style.cartTitle}>Your Cart</h1>
        <button className={style.closeCart} onClick={() => setIsShowing(false)}>
          <FontAwesomeIcon icon={faXmark} />
        </button>

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
            <CartCheckout totalPrice={totalPrice} />
          </React.Fragment>
        )}
      </div>
    </div>
  )
}

export default Cart
