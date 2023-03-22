import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'

import InputQuantity from './index'

describe('InputQuantity', () => {
  let props

  beforeEach(() => {
    props = {
      quantity: 3,
      setQuantity: jest.fn()
    }
  })

  it('renders to match snapshot', () => {
    const { container } = render(<InputQuantity {...props} />)
    expect(container).toMatchSnapshot()
  })

  it('calls set quantity when plus button is clicked', () => {
    render(<InputQuantity {...props} />)

    const increaseQuantityButton = screen.getByText('+')
    userEvent.click(increaseQuantityButton)
    expect(props.setQuantity).toHaveBeenCalled()
  })

  it('calls set quantity when minus button is clicked', () => {
    render(<InputQuantity {...props} />)

    const decreaseQuantityButton = screen.getByText('-')
    userEvent.click(decreaseQuantityButton)
    expect(props.setQuantity).toHaveBeenCalled()
  })
})
