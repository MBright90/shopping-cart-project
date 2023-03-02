import Logo from '@components/nav/logo'
import React from 'react'

import style from './Navbar.module.scss'

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <Logo />
    </div>
  )
}

export default Navbar
