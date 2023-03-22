import { modalContext } from '@components/app/modalContext'
import { render } from '@testing-library/react'
import React from 'react'

import Modal from './index'

describe('Modal', () => {
  let props
  let modalValue

  beforeEach(() => {
    props = {
      message: 'test message'
    }
    modalValue = {
      currentModal: 'test message',
      addNewModal: () => {}
    }
  })

  it('renders to match snapshot', () => {
    const { container } = render(<Modal {...props} />, {
      wrapper: ({ children }) => (
        <modalContext.Provider value={modalValue}>{children}</modalContext.Provider>
      )
    })
    expect(container).toMatchSnapshot()
  })
})
