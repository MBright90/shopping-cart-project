import InputQuantity from '@components/utilities/inputQuantity'
import React from 'react'

import style from './ProductPurchasing.module.scss'

const ProductPurchasing = () => {
  return (
    <div className={style.productPurchasing}>
      <h1 className={style.purchaseTitle}>Purchase</h1>
      <InputQuantity />
    </div>
  )
}

export default ProductPurchasing
