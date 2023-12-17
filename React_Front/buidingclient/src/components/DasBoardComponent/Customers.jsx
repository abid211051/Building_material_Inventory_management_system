import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import AddCustomer from './CustomerForm/AddCustomer';
import EditCustomer from './CustomerForm/EditCustomer';
import RemoveCustomer from './CustomerForm/RemoveCustomer';

const Customers = () => {
  const customerdata = useLoaderData();
  const [addform, setAddForm] = useState(false);
  const [editform, setEditForm] = useState(false);
  const [removeform, setremoveForm] = useState(false);
  return (
    <>
      <div className='procontainer'>
        <table>
          <thead>
            <tr>
              <th>Customer ID</th>
              <th>Customer Name</th>
              <th>Customer Phone</th>
            </tr>
          </thead>
          <tbody>
            {customerdata?.length > 0 && customerdata.map((pers, key) => (
              <tr key={pers?.cusid}>
                <td>{pers?.cusid}</td>
                <td>{pers?.customername}</td>
                <td>{pers?.customerphone}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='formdiv'>
          <div className='probtn'>
            {editform === false && removeform === false ?
              <button onClick={() => setAddForm(!addform)}>{addform ? 'Go Back' : 'Add Customer'}</button> : ''
            }
            {addform === false && removeform === false ?
              <button onClick={() => setEditForm(!editform)}>{editform ? 'Go Back' : 'Edit Customer'}</button> : ''
            }
            {editform === false && addform === false ?
              <button onClick={() => setremoveForm(!removeform)}>{removeform ? 'Go Back' : 'Remove Customer'}</button> : ''
            }
          </div>
          {addform &&  <AddCustomer/>}
          {editform && <EditCustomer/>}
          {removeform && <RemoveCustomer/>}
        </div>
      </div>
    </>
  )
}

export default Customers
