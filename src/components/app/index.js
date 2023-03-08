import Cart from '@components/utilities/cart'
import { array } from 'prop-types'
import React from 'react'

import style from './App.module.scss'

const App = ({ children }) => {
  return (
    <div className={style.appLayout}>
      <Cart />
      {children}
    </div>
  )
}

App.propTypes = {
  children: array.isRequired
}

export default App
