import { render, screen } from '@testing-library/react'
import React from 'react'

import AboutPage from './index'

describe('HomepageImage', () => {
  it('renders to match snapshot', () => {
    const { container } = render(<AboutPage />)
    expect(container).toMatchSnapshot()
  })

  it('renders the a tag with the correct href', () => {
    render(<AboutPage />)
    const aLink = screen.getByText(/mBright90$/i)
    expect(aLink).toHaveAttribute('href', 'https://github.com/MBright90/shopping-cart-project')
  })
})
