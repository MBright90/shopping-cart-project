import { cartContext } from '@components/app/cartContext'
import NavItem from '@components/nav/navItem'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'

import style from './Navbar.module.scss'

const Navbar = () => {
  const { cartContents, isShowing, setIsShowing } = useContext(cartContext)

  const navArray = ['Home', 'Products', 'About']
  const navItemArray = navArray.map((listItem) => (
    <NavItem linkDestination={listItem} key={listItem} />
  ))

  const handleBasketClick = () => {
    if (!isShowing) setIsShowing(true)
  }

  return (
    <div className={style.navbar}>
      <ul className={style.linkList}>{navItemArray}</ul>

      <button className={style.basketLink} onClick={handleBasketClick}>
        <FontAwesomeIcon icon={faBasketShopping} />
        <p className={style.basketAmount}>{cartContents.length}</p>
      </button>
    </div>
  )
}

export default Navbar
