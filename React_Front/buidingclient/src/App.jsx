import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/Home'
import Dasboard from './components/DasBoardComponent/Dasboard'
import Product from './components/DasBoardComponent/Product'
import Stock from './components/DasBoardComponent/Stock'
import { GetProduct } from './components/DasBoardComponent/LoaderData/GetProduct'
import { GetStock } from './components/DasBoardComponent/LoaderData/GetStock'
import Customers from './components/DasBoardComponent/Customers'
import { GetCustomer } from './components/DasBoardComponent/LoaderData/GetCustomer'
import Sales from './components/DasBoardComponent/Sales'
import { GetSale } from './components/DasBoardComponent/LoaderData/GetSale'

const App = () => {
  const router = createBrowserRouter([
    {
      index : true,
      path : '/',
      element : <Home/>
    },
    {
      path : '/dasboard/*',
      element : <Dasboard/>,
      loader : function(){
        let islogin = localStorage.getItem('islogin');
        if(islogin==='yes' || islogin!==null){
          return true;
        }
        else{
          return false;
        }
      },
      children : [
        {
          path : 'product',
          loader : GetProduct,
          element : <Product/>
        },
        {
          path : 'stock',
          loader : GetStock,
          element : <Stock/>
        },
        {
          path : 'customer',
          loader : GetCustomer,
          element : <Customers/>
        },
        {
          path : 'sale',
          loader : GetSale,
          element : <Sales/>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
