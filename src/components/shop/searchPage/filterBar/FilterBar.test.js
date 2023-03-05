import { productContext } from '@components/app/productContext'
import { render, screen } from '@testing-library/react'
import React from 'react'

import FilterBar from './index'

describe('FilterBar', () => {
  it('renders to match snapshot', () => {
    const { container } = render(<FilterBar />)
    expect(container).toMatchSnapshot()
  })

  it('renders child components with correct text', () => {
    const categoryFilters = ['testOne', 'testTwo']
    const contextValue = { categoryFilters }

    render(<FilterBar />, {
      wrapper: ({ children }) => (
        <productContext.Provider context={contextValue}>{children}</productContext.Provider>
      )
    })

    const filterItems = screen.getAllByTestId('filter-item')
    expect(filterItems[0]).toHaveTextContent('testOne')
    expect(filterItems[1]).toHaveTextContent('testTwo')
  })
})
