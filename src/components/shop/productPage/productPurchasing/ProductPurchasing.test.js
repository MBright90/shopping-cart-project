import { cartContext } from '@components/app/cartContext'
import { modalContext } from '@components/app/modalContext'
import { productContext } from '@components/app/productContext'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { HashRouter } from 'react-router-dom'

import ProductPurchasing from './index'

describe('ProductPurchasing', () => {
  let props
  let cartValue
  let modalValue
  let productValue

  beforeEach(() => {
    props = {
      inStock: true,
      productId: 'ma-2-guitars'
    }
    cartValue = { addProductToCart: () => {} }
    modalValue = { addNewModal: () => {} }
    productValue = { findProduct: () => {} }
  })

  it('renders to match snapshot', () => {
    const { container } = render(<ProductPurchasing {...props} />, {
      wrapper: ({ children }) => (
        <HashRouter basename="/">
          <cartContext.Provider value={cartValue}>
            <modalContext.Provider value={modalValue}>
              <productContext.Provider value={productValue}>{children}</productContext.Provider>
            </modalContext.Provider>
          </cartContext.Provider>
        </HashRouter>
      )
    })

    expect(container).toMatchSnapshot()
  })

  it('calls handleAddProductClick when purchase button clicked', () => {
    cartValue.addProductToCart = jest.fn()

    render(<ProductPurchasing {...props} />, {
      wrapper: ({ children }) => (
        <HashRouter basename="/">
          <cartContext.Provider value={cartValue}>
            <modalContext.Provider value={modalValue}>
              <productContext.Provider value={productValue}>{children}</productContext.Provider>
            </modalContext.Provider>
          </cartContext.Provider>
        </HashRouter>
      )
    })

    const addProductButton = screen.getByText(/Add to Cart/i)
    userEvent.click(addProductButton)
    expect(cartValue.addProductToCart).toHaveBeenCalled()
  })
})
