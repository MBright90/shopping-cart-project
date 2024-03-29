import { productContext } from '@components/app/productContext'
import { render } from '@testing-library/react'
import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'

import ProductPage from './index'

describe('ProductPage', () => {
  let findProduct

  beforeEach(() => {
    findProduct = jest.fn((productId) => {
      if (productId === 'ma-2-guitars')
        return {
          name: 'MA-2',
          id: 'ma-2-guitars',
          inStock: true,
          image: 'guitarImageTest',
          price: 949,
          description:
            // eslint-disable-next-line prettier/prettier
            'The Manson MA-2 is a versatile and affordable electric guitar that\'s perfect for players of all levels. Its lightweight body and comfortable neck make it easy to play for hours on end, while its high-output pickups deliver a wide range of tones. Whether you\'re playing blues, rock, or metal, the MA-2 can handle it all with ease.'
        }
    })
  })

  it('renders to match snapshot', () => {
    const contextValue = { findProduct }

    const { container } = render(<ProductPage />, {
      wrapper: ({ children }) => (
        <HashRouter initialEntries={['/products/ma-2-guitars']}>
          <productContext.Provider value={contextValue}>
            <Routes>
              <Route path="/products/:productId" element={children} />
            </Routes>
          </productContext.Provider>
        </HashRouter>
      )
    })

    expect(container).toMatchSnapshot()
  })
})
