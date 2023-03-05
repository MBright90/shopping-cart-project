import { object } from 'prop-types'
import React from 'react'

import style from './ProductCard.module.scss'

const ProductCard = ({ product }) => {
  const handleProductClick = (e) => {
    console.log(e.target)
  }

  const handleProductKeyDown = (e) => {
    if (e.code === 'Enter') handleProductClick(e)
  }

  return (
    <div
      className={style.productCard}
      onClick={handleProductClick}
      onKeyDown={handleProductKeyDown}
      tabIndex="-1"
      data-testid="product-card"
    >
      <div
        className={style.productImage}
        style={{ backgroundImage: `url("${product.image}")` }}
        role="img"
      />
      <div className={style.detailsContainer}>
        <p className={style.name}>{product.name}</p>
        <p className={style.price}>£{product.price}</p>
      </div>
    </div>
  )
}

ProductCard.propTypes = {
  product: object.isRequired
}

export default ProductCard
