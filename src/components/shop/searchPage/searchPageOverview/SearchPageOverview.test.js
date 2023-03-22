import { productContext } from '@components/app/productContext'
import { render } from '@testing-library/react'
import React from 'react'
import { HashRouter } from 'react-router-dom'

import SearchPageOverview from './index'

describe('SearchPageOverview', () => {
  let productValue

  beforeEach(() => {
    const changeCategory = () => {}
    const categoryFilters = ['testFilter1', 'testFilter2']
    const currentProducts = [
      {
        name: 'productTest',
        id: 'productTest-guitars',
        inStock: true,
        image: 'guitarImages.maTwo',
        price: 10,
        description: 'descriptionTest'
      }
    ]
    productValue = { changeCategory, categoryFilters, currentProducts }
  })

  it('renders to match snapshot', () => {
    const { container } = render(<SearchPageOverview />, {
      wrapper: ({ children }) => (
        <HashRouter basename="/">
          <productContext.Provider value={productValue}>{children}</productContext.Provider>
        </HashRouter>
      )
    })

    expect(container).toMatchSnapshot()
  })
})
