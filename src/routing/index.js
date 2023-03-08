import App from '@components/app'
import CartContextProvider from '@components/app/cartContext'
import ProductContextProvider from '@components/app/productContext'
import Homepage from '@components/homepage'
import Header from '@components/nav/header'
import ProductPage from '@components/shop/productPage'
import SearchPageOverview from '@components/shop/searchPage/searchPageOverview'
import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'

const RouteSwitch = () => {
  return (
    <HashRouter>
      <CartContextProvider>
        <App>
          <Header />
          <ProductContextProvider>
            <Routes>
              <Route exact path="/" element={<Homepage />} />
              <Route exact path="/products" element={<SearchPageOverview />} />
              <Route path="/products/:productId" element={<ProductPage />} />
            </Routes>
          </ProductContextProvider>
        </App>
      </CartContextProvider>
    </HashRouter>
  )
}

export default RouteSwitch
