import { cartContext } from '@components/app/cartContext'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { HashRouter } from 'react-router-dom'

import Navbar from './index'

describe('Navbar', () => {
  let cartContents
  let contextValue

  beforeEach(() => {
    cartContents = ['test1', 'test2', 'test3']
    contextValue = {
      cartContents,
      isShowing: false,
      setIsShowing: () => {}
    }
  })

  it('renders to match snapshot', () => {
    const { container } = render(<Navbar />, {
      wrapper: ({ children }) => (
        <HashRouter baseName="/">
          <cartContext.Provider value={contextValue}>{children}</cartContext.Provider>
        </HashRouter>
      )
    })
    expect(container).toMatchSnapshot()
  })

  it('renders the correct count of products in cart', () => {
    render(<Navbar />, {
      wrapper: ({ children }) => (
        <HashRouter baseName="/">
          <cartContext.Provider value={contextValue}>{children}</cartContext.Provider>
        </HashRouter>
      )
    })

    const productCount = screen.getByText(/3/i)
    expect(productCount).toBeInTheDocument()
  })

  it('calls handleBasketClick when the basket link is clicked', () => {
    contextValue.setIsShowing = jest.fn()

    render(<Navbar />, {
      wrapper: ({ children }) => (
        <HashRouter baseName="/">
          <cartContext.Provider value={contextValue}>{children}</cartContext.Provider>
        </HashRouter>
      )
    })

    const basketButton = screen.getByRole('button')
    userEvent.click(basketButton)

    expect(contextValue.setIsShowing).toHaveBeenCalled()
  })
})
