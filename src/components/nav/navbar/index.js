import NavItem from '@components/nav/navItem'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import style from './Navbar.module.scss'

const Navbar = () => {
  const navArray = ['Home', 'Products', 'About']
  const navItemArray = navArray.map((listItem) => (
    <NavItem LinkDestination={listItem} key={listItem} />
  ))

  return (
    <div className={style.navbar}>
      <ul className={style.linkList}>{navItemArray}</ul>
      <div className={style.basketLink}>
        <FontAwesomeIcon icon={faBasketShopping} />
      </div>
    </div>
  )
}

export default Navbar
