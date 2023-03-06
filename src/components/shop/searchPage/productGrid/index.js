import { productContext } from '@components/app/productContext'
import ProductCard from '@components/shop/searchPage/productCard'
import React, { useContext } from 'react'

import style from './ProductGrid.module.scss'

const ProductGrid = () => {
  const { currentProducts } = useContext(productContext)

  const productArray = currentProducts.map((product) => {
    return <ProductCard product={product} key={product.name} />
  })

  return <div className={style.productGrid}>{productArray}</div>
}

export default ProductGrid
