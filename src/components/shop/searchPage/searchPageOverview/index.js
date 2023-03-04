import React from 'react'

import FilterBar from '../filterBar'
import ProductGrid from '../productGrid'
import style from './SearchPageOverview.module.scss'

const SearchPageOverview = () => {
  return (
    <div className={style.searchPageOverview}>
      <FilterBar />
      <ProductGrid />
    </div>
  )
}

export default SearchPageOverview
