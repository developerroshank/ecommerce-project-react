import React from 'react'
import { Link } from 'react-router'

export const NotFound = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404</h1>
      <p>Oops! Page not found.</p>
      <Link to="/">Go Home</Link>
    </div>
  )
}
