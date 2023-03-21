import { render, screen } from '@testing-library/react'
import React from 'react'
import { HashRouter } from 'react-router-dom'

import ProductImage from './index'

describe('ProductImage', () => {
  let props
  beforeEach(() => {
    props = {
      image: 'www.example.com/testImage'
    }
  })

  it('renders to match snapshot', () => {
    const { image } = render(<ProductImage {...props} />, {
      wrapper: ({ children }) => <HashRouter basename="/">{children}</HashRouter>
    })
    expect(image).toMatchSnapshot()
  })

  it('renders using the correct url', () => {
    render(<ProductImage {...props} />, {
      wrapper: ({ children }) => <HashRouter basename="/">{children}</HashRouter>
    })
    const cardImage = screen.getByRole('img')
    expect(cardImage).toHaveStyle(`background-image: url(${props.image})`)
  })
})
