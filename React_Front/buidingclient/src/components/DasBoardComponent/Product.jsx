import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import AddProduct from './ProductForm/AddProduct';
import EditProduct from './ProductForm/EditProduct';
import RemoveProduct from './ProductForm/RemoveProduct';

const Product = () => {
  const [addform, setAddForm] = useState(false);
  const [editform, setEditForm] = useState(false);
  const [removeform, setremoveForm] = useState(false);
  let productdata = useLoaderData();
  // console.log(productdata);
  return (
    <>
      <div className='procontainer'>
        <table>
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Product Name</th>
              <th>Sell Price (unit) $</th>
              <th>Cost Price (unit) $</th>
              <th>Brand</th>
            </tr>
          </thead>
          <tbody>
            {productdata?.length > 0 && productdata.map((item, key) => (
              <tr key={item?.proid}>
                <td>{item?.proid}</td>
                <td>{item?.productname}</td>
                <td>{item?.sellprice}$</td>
                <td>{item?.costprice}$</td>
                <td>{item?.brand}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='formdiv'>
          <div className='probtn'>
            {editform === false && removeform === false ?
              <button onClick={() => setAddForm(!addform)}>{addform ? 'Go Back' : 'Add Product'}</button> : ''
            }
            {addform === false && removeform === false ?
              <button onClick={() => setEditForm(!editform)}>{editform ? 'Go Back' : 'Edit Product'}</button> : ''
            }
            {editform === false && addform === false ?
              <button onClick={() => setremoveForm(!removeform)}>{removeform ? 'Go Back' : 'Remove Product'}</button> : ''
            }
          </div>
          {addform && <AddProduct />}
          {editform && <EditProduct />}
          {removeform && <RemoveProduct />}
        </div>
      </div>
    </>
  )
}

export default Product
