import React from 'react'
import { HomePage } from './pages/HomePage'
import { Route, Routes } from 'react-router'

const App = () => {
  return (
    <>


      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/checkout' element={<div>test checkout page</div>} />
      </Routes>
    </>
  )
}

export default App