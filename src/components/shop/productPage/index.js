import { productContext } from '@components/app/productContext'
import ProductImage from '@components/shop/productPage/productImage'
import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'

import style from './ProductPage.module.scss'
import ProductDetails from './productDetails'
import ProductPurchasing from './productPurchasing'

const ProductPage = () => {
  const { productId } = useParams()
  const { findProduct } = useContext(productContext)

  const product = findProduct(productId)

  let productPage

  if (!product) productPage = <h1>Error, that product was no found</h1>
  else {
    productPage = (
      <React.Fragment>
        <ProductImage image={product.image} />
        <ProductDetails product={product} />
        <ProductPurchasing inStock={product.inStock} />
      </React.Fragment>
    )
  }

  return <main className={style.productPage}>{productPage}</main>
}

export default ProductPage
