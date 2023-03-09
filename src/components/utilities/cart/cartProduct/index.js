import { cartContext } from '@components/app/cartContext'
import InputQuantity from '@components/utilities/inputQuantity'
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { func, object } from 'prop-types'
import React, { useContext } from 'react'

import style from './CartProduct.module.scss'

const CartProduct = ({ product, removeProduct }) => {
  const { updateCartQuantity } = useContext(cartContext)

  const calculateProductTotal = () => {
    return product.price * product.quantity
  }

  const setQuantity = (newQuantity) => {
    updateCartQuantity(product.id, newQuantity)
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
        <p className={style.totalPrice}>Total: £{calculateProductTotal()}</p>
      </div>
      <button className={style.deleteButton} onClick={removeProduct}>
        <FontAwesomeIcon icon={faDeleteLeft} />
      </button>
    </div>
  )
}

CartProduct.propTypes = {
  product: object.isRequired,
  removeProduct: func.isRequired
}

export default CartProduct
