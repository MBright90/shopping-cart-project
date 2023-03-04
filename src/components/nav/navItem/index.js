import string from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'

import style from './NavItem.module.scss'

const NavItem = ({ LinkDestination }) => {
  return (
    <li className={style.navItem}>
      <Link to={LinkDestination !== 'Home' ? LinkDestination.toLowerCase() : '/'}>
        {LinkDestination}
      </Link>
    </li>
  )
}

NavItem.propTypes = {
  LinkDestination: string.isRequired
}

export default NavItem
