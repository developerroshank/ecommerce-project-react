import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Route, Routes } from 'react-router'
import { HomePage } from './pages/home/HomePage'
import { CheckoutPage } from './pages/checkout/CheckoutPage'
import { OrdersPage } from './pages/orders/OrdersPage'
import { NotFound } from './pages/NotFound'

const App = () => {

  const [cart, setCart] = useState([]);

  const loadCart = async () => {
    const response = await axios.get('/api/cart-items?expand=product');
    setCart(response.data);
  };

  useEffect(() => {
    loadCart();
  }, []);

  return (
    <>
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route index element={<HomePage cart={cart} loadCart={loadCart} />} />
        <Route path='/checkout' element={<CheckoutPage cart={cart} loadCart={loadCart} />} />
        <Route path='/orders' element={<OrdersPage cart={cart} />} />
      </Routes>
    </>
  )
}

export default App