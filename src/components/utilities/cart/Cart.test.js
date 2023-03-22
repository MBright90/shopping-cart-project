import { cartContext } from '@components/app/cartContext'
import { modalContext } from '@components/app/modalContext'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'

import Cart from './index'

describe('Cart', () => {
  let cartValue
  let modalValue

  beforeEach(() => {
    cartValue = {
      cartContents: [
        {
          name: 'testName1',
          id: 'testId1',
          inStock: true,
          image: 'testImage1',
          price: 10,
          description: 'testDescription1',
          quantity: 1
        },
        {
          name: 'testName2',
          id: 'testId2',
          inStock: true,
          image: 'testImage2',
          price: 100,
          description: 'testDescription2',
          quantity: 2
        }
      ],
      isShowing: true,
      setIsShowing: () => {}
    }
    modalValue = { addNewModal: () => {} }
  })

  it('renders to match snapshot', () => {
    const { container } = render(<Cart />, {
      wrapper: ({ children }) => (
        <modalContext.Provider value={modalValue}>
          <cartContext.Provider value={cartValue}>{children}</cartContext.Provider>
        </modalContext.Provider>
      )
    })

    expect(container).toMatchSnapshot()
  })

  it('closes cart when close cart button is pressed', () => {
    cartValue.setIsShowing = jest.fn()

    render(<Cart />, {
      wrapper: ({ children }) => (
        <modalContext.Provider value={modalValue}>
          <cartContext.Provider value={cartValue}>{children}</cartContext.Provider>
        </modalContext.Provider>
      )
    })

    const cartCloseButton = screen.getByTestId('cart-close-button')
    userEvent.click(cartCloseButton)

    expect(cartValue.setIsShowing).toHaveBeenCalledWith(false)
  })

  it('renders empty cart message when cart is empty', () => {
    cartValue.cartContents = []

    render(<Cart />, {
      wrapper: ({ children }) => (
        <modalContext.Provider value={modalValue}>
          <cartContext.Provider value={cartValue}>{children}</cartContext.Provider>
        </modalContext.Provider>
      )
    })

    const emptyMessage = screen.getByText(/You have no items in your cart/i)
    expect(emptyMessage).toBeInTheDocument()
  })
})
