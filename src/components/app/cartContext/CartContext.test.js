/* eslint-disable testing-library/no-unnecessary-act */
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React, { useContext } from 'react'
import { act } from 'react-test-renderer'

import CartContextProvider, { cartContext } from './index'

describe('CartContextProvider', () => {
  it('adds a product to cart', async () => {
    const TestComponent = () => {
      const { addProductToCart, cartContents } = useContext(cartContext)
      const product = { id: 1, name: 'Test Product', price: 10.0 }
      return (
        <div>
          <p>Cart: {cartContents.length}</p>
          <button data-testid={'add-to-cart-button'} onClick={() => addProductToCart(product, 1)}>
            Add to Cart
          </button>
        </div>
      )
    }

    render(<TestComponent />, {
      wrapper: ({ children }) => <CartContextProvider>{children}</CartContextProvider>
    })

    const addProductButton = await screen.findByTestId('add-to-cart-button')
    act(() => {
      userEvent.click(addProductButton)
    })
    expect(await screen.findByText(/Cart: 1/i)).toBeInTheDocument()
  })

  it('removes a product from cart', () => {
    const TestComponent = () => {
      const { addProductToCart, cartContents, removeProductFromCart } = useContext(cartContext)
      const product = { id: 1, name: 'Test Product', price: 10.0 }
      return (
        <>
          <p>Cart: {cartContents.length}</p>
          <button onClick={() => addProductToCart(product, 1)}>Add to Cart</button>
          <button onClick={() => removeProductFromCart(1)}>Remove from Cart</button>
        </>
      )
    }

    render(
      <CartContextProvider>
        <TestComponent />
      </CartContextProvider>
    )

    const addProductButton = screen.getByText(/Add to Cart/i)
    act(() => {
      userEvent.click(addProductButton)
    })
    expect(screen.getByText('Cart: 1')).toBeInTheDocument()

    const removeProductButton = screen.getByText(/Remove from Cart/i)
    act(() => {
      userEvent.click(removeProductButton)
    })

    expect(screen.queryByText('Cart (1)')).not.toBeInTheDocument()
  })

  it('updates product quantity in cart', () => {
    const TestComponent = () => {
      const { addProductToCart, cartContents, updateCartQuantity } = React.useContext(cartContext)
      const product = { id: 1, name: 'Test Product', price: 10.0 }
      return (
        <>
          <p>Quantity: {cartContents[0] ? cartContents[0].quantity : cartContents.length}</p>
          <button onClick={() => addProductToCart(product, 1)}>Add to Cart</button>
          <button onClick={() => updateCartQuantity(1, 2)}>Update Quantity</button>
        </>
      )
    }

    render(
      <CartContextProvider>
        <TestComponent />
      </CartContextProvider>
    )

    const addProductButton = screen.getByText(/Add to Cart/i)
    act(() => {
      userEvent.click(addProductButton)
    })
    expect(screen.getByText('Quantity: 1')).toBeInTheDocument()

    const updateQuantityButton = screen.getByText(/Update Quantity/i)
    act(() => {
      userEvent.click(updateQuantityButton)
    })
    expect(screen.getByText('Quantity: 2')).toBeInTheDocument()
  })

  it('applies discount code', async () => {
    const TestComponent = () => {
      const { applyDiscountCode, activeDiscount } = useContext(cartContext)
      return (
        <>
          <p>Active Discount: {activeDiscount * 100}%</p>
          <button onClick={() => applyDiscountCode('mBright90')}>Apply Discount</button>
        </>
      )
    }

    render(
      <CartContextProvider>
        <TestComponent />
      </CartContextProvider>
    )

    const beforeDiscount = screen.getByText(/Active Discount: 0%/i)
    expect(beforeDiscount).toBeInTheDocument()

    const applyDiscountButton = screen.getByText(/Apply Discount/i)
    act(() => {
      userEvent.click(applyDiscountButton)
    })

    const afterDiscount = screen.getByText(/Active Discount: 10%/i)
    expect(afterDiscount).toBeInTheDocument()
  })
})
