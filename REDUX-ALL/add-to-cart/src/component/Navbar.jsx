import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
  
  const { cartData } = useSelector(state => state.product)

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">

        <Link className="navbar-brand" to="/">Navbar</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text-light" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/product">Product</Link>
            </li>
          </ul>
        </div>

        <div className='d-flex justify-content-end'>
          <Link className="nav-link text-light" to="/cart">Cart {cartData.length?`(${cartData.length})`:''}</Link>
        </div>
      </nav>
    </>
  )
}

export default Navbar;
