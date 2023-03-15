import { render } from '@testing-library/react'
import React from 'react'

import Header from './index'

describe('Header', () => {
  it('renders to match snapshot', () => {
    const { container } = render(<Header />)
    expect(container).toMatchSnapshot()
  })
})
