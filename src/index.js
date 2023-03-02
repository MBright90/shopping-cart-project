import RouteSwitch from '@routes'
import '@styles/index.scss'
import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouteSwitch />
  </React.StrictMode>
)
