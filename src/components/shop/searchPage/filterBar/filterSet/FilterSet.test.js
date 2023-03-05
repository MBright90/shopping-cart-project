import { render, screen } from '@testing-library/react'
import React from 'react'

import FilterSet from '.'

describe('FilterSet', () => {
  let props

  beforeEach(
    (props = {
      filterTitle: 'exampleTitle',
      filterItems: ['itemOne', 'itemTwo', 'itemThree']
    })
  )

  it('renders to match snapshot', () => {
    const { container } = render(<FilterSet {...props} />)
    expect(container).toMatchSnapshot()
  })

  it('renders a child component for each item within the filterItems array', () => {
    render(<FilterSet {...props} />)

    const filterItemComponents = screen.getAllByTestId('filter-item')
    expect(filterItemComponents).toHaveLength(3)
    expect(filterItemComponents[0]).toHaveTextContent(/itemOne/i)
    expect(filterItemComponents[1]).toHaveTextContent(/itemTwo/i)
    expect(filterItemComponents[2]).toHaveTextContent(/itemThree/i)
  })
})
