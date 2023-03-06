import FilterBar from '@components/shop/searchPage/filterBar'
import ProductGrid from '@components/shop/searchPage/productGrid'
import React from 'react'

import style from './SearchPageOverview.module.scss'

const SearchPageOverview = () => {
  return (
    <main className={style.searchPageOverview}>
      <FilterBar />
      <ProductGrid />
    </main>
  )
}

export default SearchPageOverview
