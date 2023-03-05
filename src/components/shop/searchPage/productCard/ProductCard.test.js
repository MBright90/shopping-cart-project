import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'

import ProductCard from './index'

describe('ProductCard', () => {
  let props
  beforeEach((props = { product: { name: 'exampleName', image: 'exampleImage', price: '999' } }))

  it('renders to match snapshot', () => {
    const { container } = render(<ProductCard {...props} />)
    expect(container).toMatchSnapshot()
  })

  it('sets the correct image source', () => {
    render(<ProductCard {...props} />)

    const productImage = screen.getAllRole('img')
    expect(productImage).toHaveStyle('background-image: url("exampleImage")')
  })

  it('calls handleProductClick when clicked', () => {
    const handleProductClick = jest.fn()
    render(<ProductCard {...props} />)

    const productCard = screen.getByTestId('product-card')
    userEvent.click(productCard)
    expect(handleProductClick).toHaveBeenCalled()
  })

  it('calls handleProductKeyDown when clicked', () => {
    const handleProductKeyDown = jest.fn()
    render(<ProductCard {...props} />)

    const productCard = screen.getByTestId('product-card')
    userEvent.keyDown(productCard, 'Enter')
    expect(handleProductKeyDown).toHaveBeenCalled()
  })
})
