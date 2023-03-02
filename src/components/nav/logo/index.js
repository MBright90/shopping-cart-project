import logoImage from '@assets/images/manson-logo-red.png'
import React from 'react'

import style from './Logo.module.scss'

const Logo = () => {
  return <img className={style.logo} alt="Manson logo in red" src={logoImage} />
}

export default Logo
