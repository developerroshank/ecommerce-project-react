import React from 'react'
import { Route, Routes } from 'react-router'
import { HomePage } from './pages/HomePage'
import { CheckoutPage } from './pages/CheckoutPage'
import { OrdersPage } from './pages/OrdersPage'
import { NotFound } from './pages/NotFound'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route index element={<HomePage />} />
        <Route path='/checkout' element={<CheckoutPage />} />
        <Route path='/orders' element={<OrdersPage />} />
      </Routes>
    </>
  )
}

export default App