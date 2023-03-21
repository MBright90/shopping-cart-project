import { productContext } from '@components/app/productContext'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { HashRouter } from 'react-router-dom'

import FilterSet from '.'

describe('FilterSet', () => {
  let props
  let contextValue

  beforeEach(() => {
    props = {
      filterTitle: 'exampleTitle',
      filterItems: ['itemOne', 'itemTwo', 'itemThree']
    }
    contextValue = { changeCategory: () => {} }
  })

  it('renders to match snapshot', () => {
    const { container } = render(<FilterSet {...props} />, {
      wrapper: ({ children }) => (
        <HashRouter basename="/">
          <productContext.Provider value={contextValue}>{children}</productContext.Provider>
        </HashRouter>
      )
    })
    expect(container).toMatchSnapshot()
  })

  it('renders a child component for each item within the filterItems array', () => {
    render(<FilterSet {...props} />, {
      wrapper: ({ children }) => (
        <HashRouter basename="/">
          <productContext.Provider value={contextValue}>{children}</productContext.Provider>
        </HashRouter>
      )
    })

    const filterItemComponents = screen.getAllByTestId('filter-item')
    expect(filterItemComponents).toHaveLength(3)
    expect(filterItemComponents[0]).toHaveTextContent(/itemOne/i)
    expect(filterItemComponents[1]).toHaveTextContent(/itemTwo/i)
    expect(filterItemComponents[2]).toHaveTextContent(/itemThree/i)
  })
})
