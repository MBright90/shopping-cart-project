import { productContext } from '@components/app/productContext'
import FilterBar from '@components/shop/searchPage/filterBar'
import ProductGrid from '@components/shop/searchPage/productGrid'
import React, { useContext, useEffect } from 'react'

import style from './SearchPageOverview.module.scss'

const SearchPageOverview = () => {
  const { changeCategory } = useContext(productContext)

  // Include dependency array for successful category reset on unmounting
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => () => changeCategory('all'), [])

  return (
    <main className={style.searchPageOverview}>
      <FilterBar />
      <ProductGrid />
    </main>
  )
}

export default SearchPageOverview
