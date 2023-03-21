import { render } from '@testing-library/react'
import React from 'react'
import { HashRouter } from 'react-router-dom'

import ProductDetails from '.'

describe('ProductDetails', () => {
  let props

  beforeEach(() => {
    props = {
      product: {
        name: 'Test Name',
        price: 100,
        description: 'Test description'
      }
    }
  })

  it('renders information to match snapshot', () => {
    const { container } = render(<ProductDetails {...props} />, {
      wrapper: ({ children }) => <HashRouter basename="/">{children}</HashRouter>
    })
    expect(container).toMatchSnapshot()
  })
})
