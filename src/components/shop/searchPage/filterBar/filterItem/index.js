import { productContext } from '@components/app/productContext'
import { string } from 'prop-types'
import React, { useContext } from 'react'

import style from './FilterItem.module.scss'

const FilterItem = ({ filterText }) => {
  const { setCategory } = useContext(productContext)

  const handleFilterClick = (e) => {
    setCategory(e.target.textContent.toLowerCase())
  }

  return (
    <button className={style.filterItem} onClick={handleFilterClick} data-testid="filter-item">
      {filterText}
    </button>
  )
}

FilterItem.propTypes = {
  filterText: string.isRequired
}

export default FilterItem
