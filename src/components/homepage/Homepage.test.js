import { render } from '@testing-library/react'
import React from 'react'

import Homepage from './index'

describe('HomepageImage', () => {
  it('renders to match snapshot', () => {
    const { container } = render(<Homepage />)
    expect(container).toMatchSnapshot()
  })
})
