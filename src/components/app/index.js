import PropTypes from 'prop-types'
import React from 'react'

import style from './App.module.scss'

const App = ({ children }) => {
  return <div className={style.appLayout}>{children}</div>
}

App.propTypes = {
  children: PropTypes.object
}

export default App
