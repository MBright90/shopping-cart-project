import { object } from 'prop-types'
import React from 'react'

import style from './ProductDetails.module.scss'

const ProductDetails = ({ product }) => {
  return (
    <div className={style.productDetails}>
      <h1 className={style.productHeadline}>
        <span className={style.productName}>{product.name}</span>{' '}
        <span className={style.productPrice}>£{product.price}</span>
      </h1>
      <p className={style.productDescription}>{product.description}</p>
    </div>
  )
}

ProductDetails.propTypes = {
  product: object.isRequired
}

export default ProductDetails
