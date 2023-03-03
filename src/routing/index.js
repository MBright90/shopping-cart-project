import App from '@components/app'
import Header from '@components/nav/header'
import React from 'react'
import { HashRouter, Routes } from 'react-router-dom'

const RouteSwitch = () => {
  return (
    <App>
      <HashRouter>
        <Header />
        <Routes></Routes>
      </HashRouter>
    </App>
  )
}

export default RouteSwitch
