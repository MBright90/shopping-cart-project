import { render, screen } from '@testing-library/react'
import React, { useContext } from 'react'

import ProductContextProvider, { productContext } from './index'

const TestComponent = () => {
  const { productDatabase } = useContext(productContext)
  const guitarArr = [...productDatabase.guitars]

  console.log(guitarArr)

  return (
    <div>
      {guitarArr.map((guitar) => {
        return (
          <div key={guitar.name}>
            <h2>{guitar.name}</h2>
            <p>{guitar.description}</p>
            <p>£{guitar.price}</p>
          </div>
        )
      })}
    </div>
  )
}

describe('ProductContext', () => {
  it('renders to match snapshot', () => {
    const { container } = render(<TestComponent />, {
      wrapper: ({ children }) => <ProductContextProvider>{children}</ProductContextProvider>
    })
    expect(container).toMatchSnapshot()
  })

  it('provides product data', () => {
    render(<TestComponent />, {
      wrapper: ({ children }) => <ProductContextProvider>{children}</ProductContextProvider>
    })

    const maTwoName = screen.getAllByText(/MA-2/)
    expect(maTwoName[0]).toBeInTheDocument()

    const maTwoDescription = screen.getByText(/^The Manson MA-2/)
    expect(maTwoDescription).toBeInTheDocument()

    const maTwoPrice = screen.getByText(/£949/)
    expect(maTwoPrice).toBeInTheDocument()
  })

  it('finds a product given a valid id', () => {
    const FindProductTest = () => {
      const { findProduct } = useContext(productContext)
      const foundProduct = findProduct('boss-ds1-pedals')
      return (
        <>
          <p>{foundProduct.name}</p>
          <p>£{foundProduct.price}</p>
        </>
      )
    }

    render(<FindProductTest />, {
      wrapper: ({ children }) => <ProductContextProvider>{children}</ProductContextProvider>
    })

    const productName = screen.getByText(/Boss DS-1 Distortion Pedal/i)
    expect(productName).toBeInTheDocument()

    const productPrice = screen.getByText(/£49.99/i)
    expect(productPrice).toBeInTheDocument()
  })
})
