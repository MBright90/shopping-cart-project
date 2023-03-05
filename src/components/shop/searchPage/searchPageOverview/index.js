import ProductContextProvider from '@components/app/productContext'
import FilterBar from '@components/shop/searchPage/filterBar'
import ProductGrid from '@components/shop/searchPage/productGrid'
import React from 'react'

import style from './SearchPageOverview.module.scss'

const SearchPageOverview = () => {
  return (
    <ProductContextProvider>
      <div className={style.searchPageOverview}>
        <FilterBar />
        <ProductGrid />
      </div>
    </ProductContextProvider>
  )
}

export default SearchPageOverview
