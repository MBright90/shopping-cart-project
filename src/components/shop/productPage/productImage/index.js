import { string } from 'prop-types'
import React from 'react'

import style from './ProductImage.module.scss'

const ProductImage = ({ image }) => {
  return (
    <div className={style.productImage} style={{ backgroundImage: `url("${image}")` }} role="img" />
  )
}

ProductImage.propTypes = {
  image: string.isRequired
}

export default ProductImage
