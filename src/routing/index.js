import App from '@components/app'
import Homepage from '@components/homepage'
import Header from '@components/nav/header'
import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'

const RouteSwitch = () => {
  return (
    <App>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </HashRouter>
    </App>
  )
}

export default RouteSwitch
