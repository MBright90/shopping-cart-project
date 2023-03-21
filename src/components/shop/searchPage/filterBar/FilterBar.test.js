import { productContext } from '@components/app/productContext'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { HashRouter } from 'react-router-dom'

import FilterBar from './index'

describe('FilterBar', () => {
  let contextValue

  beforeEach(() => {
    contextValue = { categoryFilters: ['testOne', 'testTwo'] }
  })

  it('renders to match snapshot', () => {
    const { container } = render(<FilterBar />, {
      wrapper: ({ children }) => (
        <HashRouter basename="/">
          <productContext.Provider value={contextValue}>{children}</productContext.Provider>
        </HashRouter>
      )
    })
    expect(container).toMatchSnapshot()
  })

  it('renders child components with correct text', () => {
    render(<FilterBar />, {
      wrapper: ({ children }) => (
        <HashRouter basename="/">
          <productContext.Provider value={contextValue}>{children}</productContext.Provider>
        </HashRouter>
      )
    })

    const filterItems = screen.getAllByTestId('filter-item')
    expect(filterItems[0]).toHaveTextContent('testOne')
    expect(filterItems[1]).toHaveTextContent('testTwo')
  })
})
