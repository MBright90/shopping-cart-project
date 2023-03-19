import { render, screen, userEvent } from '@testing-library/react'
import React, { useContext } from 'react'

import CartContextProvider, { cartContext } from './index'

describe('CartContextProvider', () => {
  it('adds a product to cart', () => {
    const TestComponent = () => {
      const { addProductToCart } = useContext(cartContext)
      const product = { id: 1, name: 'Test Product', price: 10.0 }
      return <button onClick={() => addProductToCart(product, 1)}>Add to Cart</button>
    }

    render(
      <CartContextProvider>
        <TestComponent />
      </CartContextProvider>
    )

    const addProductButton = screen.getByText(/Add to Cart/i)
    userEvent.click(addProductButton)
    expect(screen.getByText('Cart (1)')).toBeInTheDocument()
  })

  it('removes a product from cart', () => {
    const TestComponent = () => {
      const { addProductToCart, removeProductFromCart } = useContext(cartContext)
      const product = { id: 1, name: 'Test Product', price: 10.0 }
      return (
        <>
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
    userEvent.click(addProductButton)
    expect(screen.getByText('Cart (1)')).toBeInTheDocument()

    const removeProductButton = screen.getByText(/Remove from Cart/i)
    userEvent.click(removeProductButton)
    expect(screen.queryByText('Cart (1)')).not.toBeInTheDocument()
  })

  it('updates product quantity in cart', () => {
    const TestComponent = () => {
      const { addProductToCart, updateCartQuantity } = React.useContext(cartContext)
      const product = { id: 1, name: 'Test Product', price: 10.0 }
      return (
        <>
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
    userEvent.click(addProductButton)
    expect(screen.getByText('Cart (1)')).toBeInTheDocument()

    const updateQuantityButton = screen.getByText(/Update Quantity/i)
    userEvent.click(updateQuantityButton)
    expect(screen.getByText('Cart (2)')).toBeInTheDocument()
  })

  test('applies discount code', () => {
    const TestComponent = () => {
      const { applyDiscountCode, activeDiscount } = React.useContext(cartContext)
      return (
        <>
          <div>Active Discount: {activeDiscount * 100}%</div>
          <button onClick={() => applyDiscountCode('mbright90')}>Apply Discount</button>
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
    userEvent.click(applyDiscountButton)

    const afterDiscount = screen.getByText(/Active Discount: 10%/i)
    expect(afterDiscount).toBeInTheDocument()
  })
})
