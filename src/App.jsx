import React from 'react'
import { Route, Routes } from 'react-router'
import { HomePage } from './pages/HomePage'
import { CheckoutPage } from './pages/CheckoutPage'

const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='/checkout' element={<CheckoutPage />} />
      </Routes>
    </>
  )
}

export default App