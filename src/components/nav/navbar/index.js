import { cartContext } from '@components/app/cartContext'
import NavItem from '@components/nav/navItem'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'

import style from './Navbar.module.scss'

const Navbar = () => {
  const { cartContents } = useContext(cartContext)

  const navArray = ['Home', 'Products', 'About']
  const navItemArray = navArray.map((listItem) => (
    <NavItem LinkDestination={listItem} key={listItem} />
  ))

  return (
    <div className={style.navbar}>
      <ul className={style.linkList}>{navItemArray}</ul>

      <div className={style.basketLink}>
        <FontAwesomeIcon icon={faBasketShopping} />
        <p style={{ marginLeft: '3px', fontWeight: 'bold' }}>{cartContents.length}</p>
      </div>
    </div>
  )
}

export default Navbar
