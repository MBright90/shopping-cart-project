import { oneOf } from 'prop-types'

import style from './App.module.scss'
import ProductContext from './productContext'

const App = ({ children }) => {
  return (
    <ProductContext>
      <div className={style.appLayout}>{children}</div>
    </ProductContext>
  )
}

App.propTypes = {
  children: oneOf([Node, NodeList]).isRequired
}

export default App
