import { productContext } from '@components/app/productContext'
import { render } from '@testing-library/react'
import React from 'react'
import { HashRouter } from 'react-router-dom'

import ProductGrid from './index'

describe('ProductGrid', () => {
  it('renders to match snapshot', () => {
    const currentProducts = [
      {
        name: 'example product',
        image: 'example image',
        description: 'example description',
        price: '500'
      }
    ]
    const contextValue = { currentProducts }

    const { container } = render(<ProductGrid />, {
      wrapper: ({ children }) => (
        <HashRouter basename="/">
          <productContext.Provider value={contextValue}>{children}</productContext.Provider>
        </HashRouter>
      )
    })

    expect(container).toMatchSnapshot()
  })
})
