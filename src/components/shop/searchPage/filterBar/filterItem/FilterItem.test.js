import { productContext } from '@components/app/productContext'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { HashRouter } from 'react-router-dom'

import FilterItem from '.'

describe('FilterSet', () => {
  let props
  let contextValue

  beforeEach(() => {
    props = {
      filterText: 'filterTextTest'
    }
    contextValue = { changeCategory: () => {} }
  })

  it('renders to match snapshot', () => {
    const { container } = render(<FilterItem {...props} />, {
      wrapper: ({ children }) => (
        <HashRouter basename="/">
          <productContext.Provider value={contextValue}>{children}</productContext.Provider>
        </HashRouter>
      )
    })

    expect(container).toMatchSnapshot()
  })

  it('calls setCategory when clicked', () => {
    contextValue.changeCategory = jest.fn()

    render(<FilterItem {...props} />, {
      wrapper: ({ children }) => (
        <HashRouter basename="/">
          <productContext.Provider value={contextValue}>{children}</productContext.Provider>
        </HashRouter>
      )
    })

    const filterItem = screen.getByTestId('filter-item')
    userEvent.click(filterItem)
    expect(contextValue.changeCategory).toHaveBeenCalled()
  })
})
