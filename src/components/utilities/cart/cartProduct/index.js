import { cartContext } from '@components/app/cartContext'
import InputQuantity from '@components/utilities/inputQuantity'
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { object } from 'prop-types'
import React, { useContext } from 'react'

import style from './CartProduct.module.scss'

const CartProduct = ({ product }) => {
  const { removeProductFromCart, updateCartQuantity } = useContext(cartContext)

  const calculateProductTotal = () => {
    return (Math.floor(product.price * product.quantity * 100) / 100).toFixed(2)
  }

  const setQuantity = (newQuantity) => {
    updateCartQuantity(product.id, newQuantity)
  }

  const removeProduct = (e) => {
    removeProductFromCart(e.target.dataset.productId)
  }

  return (
    <div className={style.productCard}>
      <div className={style.productDetails}>
        <p className={style.productName}>{product.name}</p>
        <p className={style.productPrice}>
          £{product.price} <span className={style.red}>each</span>
        </p>
      </div>
      <div
        className={style.productImage}
        style={{ backgroundImage: `url("${product.image}")` }}
      ></div>
      <div className={style.productQuantity}>
        <InputQuantity quantity={product.quantity} setQuantity={setQuantity} />
        <p className={style.totalPrice}>£{calculateProductTotal()}</p>
      </div>
      <button className={style.deleteButton} onClick={removeProduct} data-product-id={product.id}>
        <FontAwesomeIcon icon={faDeleteLeft} />
      </button>
    </div>
  )
}

CartProduct.propTypes = {
  product: object.isRequired
}

export default CartProduct
