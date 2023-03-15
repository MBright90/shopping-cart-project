import { func, oneOfType, string } from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'

import style from './NavItem.module.scss'

const NavItem = ({ linkDestination }) => {
  return (
    <li className={style.navItem}>
      <Link to={linkDestination !== 'Home' ? linkDestination.toLowerCase() : '/'}>
        {linkDestination}
      </Link>
    </li>
  )
}

NavItem.propTypes = {
  linkDestination: oneOfType([string, func]).isRequired
}

export default NavItem
