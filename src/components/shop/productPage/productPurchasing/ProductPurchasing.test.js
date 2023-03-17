import { cartContext } from '@components/app/cartContext'
import { modalContext } from '@components/app/modalContext'
import { productContext } from '@components/app/productContext'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'

import ProductPurchasing from './index'

describe('ProductPurchasing', () => {
  let props

  beforeEach(
    (props = {
      inStock: true,
      productId: 'ma-2-guitars'
    })
  )

  it('renders to match snapshot', () => {
    const addProductToCart = () => {}
    const addNewModal = () => {}
    const findProduct = () => {}

    const cartValue = { addProductToCart }
    const modalValue = { addNewModal }
    const productValue = { findProduct }

    const { container } = render(<ProductPurchasing {...props} />, {
      wrapper: ({ children }) => (
        <cartContext.Provider value={cartValue}>
          <modalContext.Provider value={modalValue}>
            <productContext.Provider value={productValue}>{children}</productContext.Provider>
          </modalContext.Provider>
        </cartContext.Provider>
      )
    })

    expect(container).toMatchSnapshot()
  })

  it('calls handleAddProductClick when purchase button clicked', () => {
    const addProductToCart = () => {}
    const addNewModal = () => {}
    const findProduct = () => {}

    const cartValue = { addProductToCart }
    const modalValue = { addNewModal }
    const productValue = { findProduct }

    const handleAddProductClick = jest.fn()

    render(<ProductPurchasing {...props} />, {
      wrapper: ({ children }) => (
        <cartContext.Provider value={cartValue}>
          <modalContext.Provider value={modalValue}>
            <productContext.Provider value={productValue}>{children}</productContext.Provider>
          </modalContext.Provider>
        </cartContext.Provider>
      )
    })

    const addProductButton = screen.getByText(/Add to Cart/i)
    userEvent.click(addProductButton)
    expect(handleAddProductClick).toHaveBeenCalled()
  })
})
