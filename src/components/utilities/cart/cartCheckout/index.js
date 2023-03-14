import { cartContext } from '@components/app/cartContext'
import { modalContext } from '@components/app/modalContext'
import { faTag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect, useState } from 'react'

import style from './CartCheckout.module.scss'

const CartCheckout = () => {
  const { activeDiscount, applyDiscountCode, totalPrice } = useContext(cartContext)
  const { addNewModal } = useContext(modalContext)

  const [formattedPrice, setFormattedPrice] = useState('0.00')
  const [currentDiscountValue, setCurrentDiscountValue] = useState('')

  useEffect(() => {
    setFormattedPrice((Math.floor(totalPrice * 100) / 100).toFixed(2))
  }, [activeDiscount, totalPrice])

  const handleDiscountApplication = () => {
    applyDiscountCode(currentDiscountValue.toLowerCase())
      ? addNewModal('Discount applied')
      : addNewModal('Discount code unsuccessful')
  }

  return (
    <div className={style.cartCheckoutContainer}>
      <div className={style.inputWrapper}>
        <form onSubmit={handleDiscountApplication}>
          <input
            className={style.discountCodeInput}
            id="discount-code-input"
            onChange={(e) => setCurrentDiscountValue(e.target.value)}
            placeholder="Discount Code"
          />
        </form>
        <button className={style.discountButton} onClick={handleDiscountApplication}>
          <FontAwesomeIcon icon={faTag} />
        </button>
      </div>

      <div className={style.currentDiscount}>
        {activeDiscount > 0 ? <p>{`Current Discount: ${activeDiscount * 100}%`}</p> : null}
      </div>
      <div className={style.totalPrice}>£{formattedPrice}</div>
      <button className={style.checkoutButton}>Checkout</button>
    </div>
  )
}

export default CartCheckout
