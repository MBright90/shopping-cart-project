import { render, screen } from '@testing-library/react'
import React, { useContext } from 'react'

import ProductContextProvider, { productContext } from '.'

const TestComponent = () => {
  const { productDatabase } = useContext(productContext)

  return (
    <div>
      {productDatabase.guitars.map((guitar) => {
        ;<div key={guitar.name}>
          <h2>{guitar.name}</h2>
          <img src={guitar.image} alt={guitar.name} />
          <p>{guitar.description}</p>
          <p>£{guitar.price}</p>
        </div>
      })}
    </div>
  )
}

describe('productContext', () => {
  it('renders to match snapshot', () => {
    const { container } = render(
      <ProductContextProvider>
        <TestComponent />
      </ProductContextProvider>
    )

    expect(container).toMatchSnapshot()
  })

  it('provides product data', () => {
    render(
      <ProductContextProvider>
        <TestComponent />
      </ProductContextProvider>
    )

    const maTwoName = screen.getByText(/MA-2/)
    expect(maTwoName).toBeInTheDocument()

    const maTwoImage = screen.getByAltText(/MA-2/)
    expect(maTwoImage).toBeInTheDocument()

    const maTwoDescription = screen.getByText(/^The Manson MA-2/)
    expect(maTwoDescription).toBeInTheDocument()

    const maTwoPrice = screen.getByText(/£949/)
    expect(maTwoPrice).toBeInTheDocument()
  })
})
