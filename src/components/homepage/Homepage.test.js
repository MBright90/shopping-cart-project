import { render } from '@testing-library/react'
import React from 'react'

import Homepage from './index'

jest.mock('@assets/images/background')

describe('HomepageImage', () => {
  it('renders to match snapshot', () => {
    const { container } = render(<Homepage />)
    expect(container).toMatchSnapshot()
  })
})
