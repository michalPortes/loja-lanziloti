import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import { UserProvider } from './context/user.context'
import { CatagoriesProvider } from './context/catagories.context'
import { CartProvider } from './context/cart.context'

import './index.scss'

const rootElement = document.getElementById('root')
render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CatagoriesProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </CatagoriesProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
)
