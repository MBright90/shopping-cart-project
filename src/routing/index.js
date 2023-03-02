import App from '@components/app'
import Navbar from '@components/nav/navbar'
import React from 'react'
import { HashRouter, Routes } from 'react-router-dom'

const RouteSwitch = () => {
  return (
    <App>
      <HashRouter>
        <Navbar />
        <Routes></Routes>
      </HashRouter>
    </App>
  )
}

export default RouteSwitch
