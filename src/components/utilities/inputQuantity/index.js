import React from 'react'

import style from './InputQuantity.module.scss'

const InputQuantity = () => {
  const handlePlusClick = () => {
    console.log('minus')
  }

  const handleMinusClick = () => {
    console.log('minus')
  }

  return (
    <div className={style.inputQuantity}>
      <button className={style.quantityButton} type="button" onClick={handlePlusClick}>
        +
      </button>
      <input
        className={style.quantityInput}
        type="number"
        id="quantity-input"
        data-testid="quantity-input"
        min={0}
      />
      <button className={style.quantityButton} type="button" onClick={handleMinusClick}>
        -
      </button>
    </div>
  )
}

export default InputQuantity
