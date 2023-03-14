import AboutPage from '@components/aboutPage'
import App from '@components/app'
import CartContextProvider from '@components/app/cartContext'
import ProductContextProvider from '@components/app/productContext'
import Homepage from '@components/homepage'
import Header from '@components/nav/header'
import ProductPage from '@components/shop/productPage'
import SearchPageOverview from '@components/shop/searchPage/searchPageOverview'
import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'

import ModalContextProvider from '../components/app/modalContext'

const RouteSwitch = () => {
  return (
    <HashRouter>
      <ModalContextProvider>
        <CartContextProvider>
          <App>
            <Header />
            <ProductContextProvider>
              <Routes>
                <Route exact path="/" element={<Homepage />} />
                <Route exact path="/products" element={<SearchPageOverview />} />
                <Route path="/products/:productId" element={<ProductPage />} />
                <Route path="/about" element={<AboutPage />} />
              </Routes>
            </ProductContextProvider>
          </App>
        </CartContextProvider>
      </ModalContextProvider>
    </HashRouter>
  )
}

export default RouteSwitch
