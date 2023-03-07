import InputQuantity from '@components/utilities/inputQuantity'
import { bool, string } from 'prop-types'
import React from 'react'

import style from './ProductPurchasing.module.scss'

const ProductPurchasing = ({ inStock, productId }) => {
  const handleAddProductClick = () => {
    console.log(productId)
  }

  return (
    <div className={style.productPurchasing}>
      <h1 className={style.purchaseTitle}>Purchase</h1>
      <div className={style.addProductContainer}>
        <InputQuantity />
        <button
          className={style.addProductButton}
          disabled={!inStock}
          onClick={handleAddProductClick}
        >
          {inStock ? 'Add to cart' : 'Out of Stock'}
        </button>
      </div>
    </div>
  )
}

ProductPurchasing.defaultProps = {
  inStock: false
}

ProductPurchasing.propTypes = {
  inStock: bool,
  productId: string.isRequired
}

export default ProductPurchasing
