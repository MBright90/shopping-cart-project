import { productContext } from '@components/app/productContext'
import { render } from '@testing-library/react'
import React from 'react'

import SearchPageOverview from './index'

describe('SearchPageOverview', () => {
  it('renders to match snapshot', () => {
    const changeCategory = () => {}
    const productValue = { changeCategory }

    const { container } = render(<SearchPageOverview />, {
      wrapper: ({ children }) => (
        <productContext.Provider value={productValue}>{children}</productContext.Provider>
      )
    })

    expect(container).toMatchSnapshot()
  })
})
