import { productContext } from '@components/app/productContext'
import React, { useContext } from 'react'

import style from './FilterBar.module.scss'
import FilterSet from './filterSet'

const FilterBar = () => {
  const { categoryFilters } = useContext(productContext)

  return (
    <div className={style.filterBar} data-testid="filter-bar">
      <FilterSet filterTitle="Categories" filterType="category" filterItems={categoryFilters} />
    </div>
  )
}

export default FilterBar
