import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Stock = () => {
  const stocks = useLoaderData();
  return (
    <>
      <div className='stockcontainer'>
        <table>
          <thead>
            <tr>
              <th>Stock ID</th>
              <th>Product ID</th>
              <th>Product Name</th>
              <th>Sell Price $</th>
              <th>Cost Price $</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {stocks?.length > 0 && stocks.map((item, key) => (
              <tr key={item?.stockId}>
                <td>{item?.stockId}</td>
                <td>{item?.productId}</td>
                <td>{item?.productName}</td>
                <td>{item?.sellPrice}$</td>
                <td>{item?.costPrice}$</td>
                <td>{item?.quanttity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Stock
