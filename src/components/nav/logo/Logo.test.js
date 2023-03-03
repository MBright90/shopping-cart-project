import { render } from '@testing-library/react'
import React from 'react'

import Logo from './index'

describe('Logo', () => {
  it('renders to match snapshot', () => {
    const { container } = render(<Logo />)
    expect(container).toMatchSnapshot()
  })
})
