import App from '@components/app'
import React from 'react'
import { HashRouter, Routes } from 'react-router-dom'

const RouteSwitch = () => {
  return (
    <App>
      <HashRouter>
        <Routes></Routes>
      </HashRouter>
    </App>
  )
}

export default RouteSwitch
