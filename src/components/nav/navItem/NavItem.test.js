import { render } from '@testing-library/react'
import React from 'react'
import { HashRouter } from 'react-router-dom'

import NavItem from './index'

describe('NavItem', () => {
  const linkDestination = 'testDestination'
  let props

  beforeEach(() => {
    props = {
      linkDestination
    }
  })

  it('renders to match snapshot', () => {
    const { container } = render(<NavItem {...props} />, {
      wrapper: ({ children }) => <HashRouter basename="/">{children}</HashRouter>
    })
    expect(container).toMatchSnapshot()
  })
})
