import { oneOf } from 'prop-types'

import style from './App.module.scss'

const App = ({ children }) => {
  return <div className={style.appLayout}>{children}</div>
}

App.propTypes = {
  children: oneOf([Node, NodeList]).isRequired
}

export default App
