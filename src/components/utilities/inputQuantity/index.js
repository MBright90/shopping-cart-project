import { func, number } from 'prop-types'
import React from 'react'

import style from './InputQuantity.module.scss'

const InputQuantity = ({ quantity, setQuantity }) => {
  const handlePlusClick = () => {
    if (quantity < 9) setQuantity(quantity + 1)
  }

  const handleMinusClick = () => {
    if (quantity > 1) setQuantity(quantity - 1)
  }

  return (
    <div className={style.inputQuantity}>
      <button
        className={style.quantityButton}
        type="button"
        onClick={handleMinusClick}
        disabled={quantity <= 1}
      >
        -
      </button>
      <input
        className={style.quantityInput}
        type="number"
        id="quantity-input"
        data-testid="quantity-input"
        onKeyDown={() => false}
        value={quantity}
        readOnly
        min={0}
        max={9}
      />
      <button
        className={style.quantityButton}
        type="button"
        onClick={handlePlusClick}
        disabled={quantity >= 9}
      >
        +
      </button>
    </div>
  )
}

InputQuantity.defaultProps = {
  orderQuantity: 1
}

InputQuantity.propTypes = {
  orderQuantity: number.isRequired,
  quantity: number.isRequired,
  setQuantity: func.isRequired
}

export default InputQuantity
