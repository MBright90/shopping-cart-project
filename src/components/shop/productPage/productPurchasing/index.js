import { cartContext } from '@components/app/cartContext'
import { modalContext } from '@components/app/modalContext'
import { productContext } from '@components/app/productContext'
import InputQuantity from '@components/utilities/inputQuantity'
import { bool, string } from 'prop-types'
import React, { useContext, useState } from 'react'

import style from './ProductPurchasing.module.scss'

const ProductPurchasing = ({ inStock, productId }) => {
  const [quantity, setQuantity] = useState(1)
  const { addProductToCart } = useContext(cartContext)
  const { findProduct } = useContext(productContext)
  const { addNewModal } = useContext(modalContext)

  const handleAddProductClick = () => {
    const product = findProduct(productId)
    if (addProductToCart(product, quantity)) addNewModal('Added to cart')
    else addNewModal('Could not add to cart')
  }

  return (
    <div className={style.productPurchasing}>
      <h1 className={style.purchaseTitle}>Purchase</h1>
      <div className={style.addProductContainer}>
        <InputQuantity quantity={quantity} setQuantity={setQuantity} />
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
