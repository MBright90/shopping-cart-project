import { render } from '@testing-library/react'
import React from 'react'

import Logo from './index'

jest.mock('@assets/images/manson-logo-red.png', () => ({
  default: 'test-image'
}))

describe('Logo', () => {
  it('renders to match snapshot', () => {
    const { container } = render(<Logo />)
    expect(container).toMatchSnapshot()
  })
})
