import { productContext } from '@components/app/productContext'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'

import FilterItem from '.'

describe('FilterSet', () => {
  let props

  beforeEach(
    (props = {
      filterText: 'filterTextTest'
    })
  )

  it('renders to match snapshot', () => {
    const setCategory = jest.fn()
    const contextValue = { setCategory }

    const { container } = render(<FilterItem {...props} />, {
      wrapper: ({ children }) => (
        <productContext.Provider value={contextValue}>{children}</productContext.Provider>
      )
    })

    expect(container).toMatchSnapshot()
  })

  it('calls setCategory when clicked', () => {
    const setCategory = jest.fn()
    const contextValue = { setCategory }

    render(<FilterItem {...props} />, {
      wrapper: ({ children }) => (
        <productContext.Provider value={contextValue}>{children}</productContext.Provider>
      )
    })

    const filterItem = screen.getByTestId('filter-item')
    userEvent.click(filterItem)

    expect(setCategory).toHaveBeenCalled()
  })
})
