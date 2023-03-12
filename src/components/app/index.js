import Cart from '@components/utilities/cart'
import { array } from 'prop-types'
import React, { useContext } from 'react'

import Modal from '../utilities/modal'
import style from './App.module.scss'
import { modalContext } from './modalContext'

const App = ({ children }) => {
  const { currentModal } = useContext(modalContext)

  return (
    <div className={style.appLayout}>
      {currentModal ? <Modal message={currentModal} /> : null}
      <Cart />
      {children}
    </div>
  )
}

App.propTypes = {
  children: array.isRequired
}

export default App
