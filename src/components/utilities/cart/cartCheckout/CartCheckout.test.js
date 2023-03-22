import { cartContext } from '@components/app/cartContext'
import { modalContext } from '@components/app/modalContext'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'

import CartCheckout from './index'

describe('CartCheckout', () => {
  let cartValue
  let modalValue

  beforeEach(() => {
    cartValue = {
      activeDiscount: 0,
      applyDiscountCode: () => {},
      totalPrice: 100
    }
    modalValue = {
      addNewModal: () => {}
    }
  })

  it('renders to match snapshot', () => {
    const { container } = render(<CartCheckout />, {
      wrapper: ({ children }) => (
        <modalContext.Provider value={modalValue}>
          <cartContext.Provider value={cartValue}>{children}</cartContext.Provider>
        </modalContext.Provider>
      )
    })
    expect(container).toMatchSnapshot()
  })

  it('renders the correctly formatted price', () => {
    render(<CartCheckout />, {
      wrapper: ({ children }) => (
        <modalContext.Provider value={modalValue}>
          <cartContext.Provider value={cartValue}>{children}</cartContext.Provider>
        </modalContext.Provider>
      )
    })

    const price = screen.getByText(/£100.00/i)
    expect(price).toBeInTheDocument()
  })

  it('applies discount code and shows success message', async () => {
    cartValue.applyDiscountCode = jest.fn(() => true)
    modalValue.addNewModal = jest.fn()

    render(<CartCheckout />, {
      wrapper: ({ children }) => (
        <modalContext.Provider value={modalValue}>
          <cartContext.Provider value={cartValue}>{children}</cartContext.Provider>
        </modalContext.Provider>
      )
    })

    const discountInput = screen.getByPlaceholderText(/Discount Code/i)
    await userEvent.type(discountInput, 'discountTest')

    const applyDiscountButton = screen.getByTestId('discount-button')
    userEvent.click(applyDiscountButton)

    expect(cartValue.applyDiscountCode).toHaveBeenCalledWith('discounttest')
    expect(modalValue.addNewModal).toHaveBeenCalled()
  })
})
