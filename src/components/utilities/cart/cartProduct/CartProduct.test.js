/* eslint-disable testing-library/no-unnecessary-act */
import { cartContext } from '@components/app/cartContext'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'

import CartProduct from './index'

describe('CartProduct', () => {
  let cartValue
  let product

  beforeEach(() => {
    cartValue = {
      removeProductFromCart: () => {},
      updateCartQuantity: () => {}
    }
    product = {
      name: 'testName',
      id: 'testId',
      inStock: true,
      image: 'testImage',
      price: 100,
      description: 'testDescription',
      quantity: 3
    }
  })

  it('renders to match snapshot', () => {
    const { container } = render(<CartProduct product={product} />, {
      wrapper: ({ children }) => (
        <cartContext.Provider value={cartValue}>{children}</cartContext.Provider>
      )
    })
    expect(container).toMatchSnapshot()
  })

  it('calls removeProductFromCart upon delete button click', () => {
    cartValue.removeProductFromCart = jest.fn()

    render(<CartProduct product={product} />, {
      wrapper: ({ children }) => (
        <cartContext.Provider value={cartValue}>{children}</cartContext.Provider>
      )
    })

    const deleteButton = screen.getByTestId('delete-button')
    userEvent.click(deleteButton)

    expect(cartValue.removeProductFromCart).toHaveBeenCalled()
  })

  it('calls updateCartQuantity when quantity buttons are clicked', () => {
    cartValue.updateCartQuantity = jest.fn()

    render(<CartProduct product={product} />, {
      wrapper: ({ children }) => (
        <cartContext.Provider value={cartValue}>{children}</cartContext.Provider>
      )
    })

    const buttons = screen.getAllByRole('button')
    userEvent.click(buttons[0])
    expect(cartValue.updateCartQuantity).toHaveBeenCalled()

    userEvent.click(buttons[1])
    expect(cartValue.updateCartQuantity).toHaveBeenCalledTimes(2)
  })
})
