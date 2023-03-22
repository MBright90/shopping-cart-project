/* eslint-disable testing-library/no-unnecessary-act */
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React, { useContext } from 'react'
import { act } from 'react-test-renderer'

import ModalContextProvider, { modalContext } from './index'

describe('ModalContextProvider', () => {
  it('matches a snapshot when rendering', () => {
    render(
      <ModalContextProvider>
        <div>Test Div</div>
      </ModalContextProvider>
    )

    const div = screen.getByText(/Test Div/i)
    expect(div).toMatchSnapshot()
  })

  it('provides currentModal and addNewModal values', () => {
    const TestComponent = () => {
      const { currentModal, addNewModal } = useContext(modalContext)
      return (
        <>
          <div>{currentModal}</div>
          <button onClick={() => addNewModal('Test Modal')}>Add Modal</button>
        </>
      )
    }

    render(
      <ModalContextProvider>
        <TestComponent />
      </ModalContextProvider>
    )

    const modalButton = screen.getByText(/Add Modal/i)
    act(() => {
      userEvent.click(modalButton)
    })

    const testModalDisplay = screen.getByText(/Test Modal/i)
    expect(testModalDisplay).toBeInTheDocument()
  })
})
