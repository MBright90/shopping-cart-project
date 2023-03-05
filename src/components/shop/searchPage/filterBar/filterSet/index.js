import { arrayOf, string } from 'prop-types'
import React from 'react'

import FilterItem from '../filterItem'
import style from './FilterSet.module.scss'

const FilterSet = ({ filterTitle, filterItems }) => {
  return (
    <React.Fragment>
      <p className={style.filterTitle}>{filterTitle}</p>
      <ul className={style.filterSet}>
        {filterItems.map((item) => (
          <FilterItem filterText={item} key={item} />
        ))}
      </ul>
    </React.Fragment>
  )
}

FilterSet.propTypes = {
  filterItems: arrayOf(string).isRequired,
  filterTitle: string.isRequired
}

export default FilterSet
