import { render, screen } from '@testing-library/react'
import React from 'react'
import { HashRouter } from 'react-router-dom'

import ProductCard from './index'

describe('ProductCard', () => {
  let props
  beforeEach(() => {
    props = { product: { name: 'exampleName', image: 'exampleImage', price: '999' } }
  })

  it('renders to match snapshot', () => {
    const { container } = render(<ProductCard {...props} />, {
      wrapper: ({ children }) => <HashRouter basename="/">{children}</HashRouter>
    })
    expect(container).toMatchSnapshot()
  })

  it('sets the correct image source', () => {
    render(<ProductCard {...props} />, {
      wrapper: ({ children }) => <HashRouter basename="/">{children}</HashRouter>
    })

    const productImage = screen.getByRole('img')
    expect(productImage).toHaveStyle('background-image: url("exampleImage")')
  })
})
