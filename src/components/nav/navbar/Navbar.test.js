import { cartContext } from '@components/app/cartContext'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'

import Navbar from './index'

describe('Navbar', () => {
  it('renders to match snapshot', () => {
    const cartContents = ['test1', 'test2', 'test3']
    const contextValue = { cartContents }

    const { container } = render(<Navbar />, {
      wrapper: ({ children }) => (
        <cartContext.provider value={contextValue}>{children}</cartContext.provider>
      )
    })
    expect(container).toMatchSnapshot()
  })

  it('renders the correct count of products in cart', () => {
    const cartContents = ['test1', 'test2', 'test3']
    const contextValue = { cartContents }

    render(<Navbar />, {
      wrapper: ({ children }) => (
        <cartContext.provider value={contextValue}>{children}</cartContext.provider>
      )
    })

    const productCount = screen.getByText(/3/i)
    expect(productCount).toBeInTheDocument()
  })

  it('calls handleBasketClick when the basket link is clicked', () => {
    const cartContents = ['test1', 'test2', 'test3']
    const contextValue = { cartContents }

    const handleBasketClick = jest.fn()

    render(<Navbar />, {
      wrapper: ({ children }) => (
        <cartContext.provider value={contextValue}>{children}</cartContext.provider>
      )
    })

    const basketButton = screen.getByRole('button')
    userEvent.click(basketButton)
    expect(handleBasketClick).toHaveBeenCalled()
  })
})
