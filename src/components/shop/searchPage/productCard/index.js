import { object } from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'

import style from './ProductCard.module.scss'

const ProductCard = ({ product }) => {
  return (
    <Link
      to={`/products/${product.id}`}
      className={style.productCard}
      data-product-id={product.id}
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
    </Link>
  )
}

ProductCard.propTypes = {
  product: object.isRequired
}

export default ProductCard
