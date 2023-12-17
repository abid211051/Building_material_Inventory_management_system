import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom';
import AddSale from './SalesForm/AddSale';

const Sales = () => {
  const [addform, setAddForm] = useState(false);
  const [editform, setEditForm] = useState(false);
  const [removeform, setremoveForm] = useState(false);
  const saledata = useLoaderData();
  return (
    <>
      <div className='procontainer'>
        <table>
          <thead>
            <tr>
              <th>Sales ID</th>
              <th>Sales Quantity</th>
              <th>Product Name</th>
              <th>Sales Price</th>
              <th>Customer ID</th>
              <th>Customer Name</th>
            </tr>
          </thead>
          <tbody>
            {saledata?.length > 0 && saledata.map((item, key) => (
              <tr key={item?.saleId}>
                <td>{item?.saleId}</td>
                <td>{item?.saleQuantity}</td>
                <td>{item?.productName}</td>
                <td>{item?.salePrice}$</td>
                <td>{item?.customerId}</td>
                <td>{item?.customerName}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='formdiv'>
          <div className='probtn'>
            {editform === false && removeform === false ?
              <button onClick={() => setAddForm(!addform)}>{addform ? 'Go Back' : 'Add Sales Report'}</button> : ''
            }
          </div>
          {addform && <AddSale />}
        </div>
      </div>
    </>
  )
}

export default Sales
