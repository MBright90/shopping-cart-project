import { cartContext } from '@components/app/cartContext'
import { render } from '@testing-library/react'
import React from 'react'
import { HashRouter } from 'react-router-dom'

import Header from './index'

jest.mock('@assets/images/manson-logo-red.png', () => ({
  default: 'test-image'
}))

describe('Header', () => {
  it('renders children components', () => {
    const cartValue = { cartContents: [], isShowing: false, setIsShowing: () => {} }

    const { container } = render(<Header />, {
      wrapper: ({ children }) => (
        <HashRouter basename="/">
          <cartContext.Provider value={cartValue}>{children}</cartContext.Provider>
        </HashRouter>
      )
    })

    expect(container).toMatchSnapshot()
  })
})
