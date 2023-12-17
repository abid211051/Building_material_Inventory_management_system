import React from 'react'
import { Link, Navigate, Outlet, useLoaderData, useNavigate } from 'react-router-dom'

const Dasboard = () => {
  let islogin = useLoaderData();
  let navigate = useNavigate();
  const logout =()=>{
    localStorage.clear();
    navigate('/');
  }
  return (
    <>
      <div className='container'>
        <h1 className='dash1'>Building Material Inventory Management</h1>
        <nav className='nav'>
          <Link to={'/dasboard/product'} className='link'>Product</Link>
          <Link to={'/dasboard/stock'} className='link'>Stock</Link>
          <Link to={'/dasboard/customer'} className='link'>Customers</Link>
          <Link to={'/dasboard/sale'} className='link'>Sales</Link>
          <button onClick={logout}>Log Out</button>
        </nav>
        {islogin ? <Outlet /> : <Navigate to={'/'} />}
      </div>
    </>
  )
}

export default Dasboard
