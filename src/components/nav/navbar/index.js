import NavItem from '@components/nav/navItem'
import React from 'react'

import style from './Navbar.module.scss'

const Navbar = () => {
  const navArray = ['Home', 'Products', 'About']
  const navItemArray = navArray.map((listItem) => (
    <NavItem LinkDestination={listItem} key={listItem} />
  ))

  return <ul className={style.navbar}>{navItemArray}</ul>
}

export default Navbar
