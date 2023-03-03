import Logo from '@components/nav/logo'
import Navbar from '@components/nav/navbar'
import React from 'react'

import style from './Header.module.scss'

const Header = () => {
  return (
    <header className={style.header}>
      <Logo />
      <Navbar />
    </header>
  )
}

export default Header
