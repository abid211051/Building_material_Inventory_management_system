import React from 'react'

const AddSale = () => {
  const addsale = async (e) => {
    e.preventDefault();
    let proid = e.target.proid.value;
    let salequantity = e.target.salequantity.value;
    let cusid = e.target.cusid.value;
    let saleprice = e.target.saleprice.value;
    let data = {
      saleid: 0,
      salequantity,
      proid,
      cusid,
      saleprice
    }
    try {
      const response = await fetch('https://localhost:7066/api/Sales', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(response.status);
      }
      const resdata = await response.json();
      window.location.reload()
      // console.log(resdata)
    } catch (error) {
      console.error('Error during POST request:', error.message);
    }
  }
  return (
    <>
      <form action="" onSubmit={addsale}>
        <div>
          <label htmlFor="">Product Id:</label>
          <input type="number" placeholder='Product Id:' name='proid' required />
        </div>
        <div>
          <label htmlFor="">Sale quantity:</label>
          <input type="number" placeholder='Sale quantity' name='salequantity' required />
        </div>
        <div>
          <label htmlFor="">Customer Id:</label>
          <input type="number" placeholder='Customer Id' name='cusid' required />
        </div>
        <div>
          <label htmlFor="">Saleprice:</label>
          <input type="number" placeholder='Saleprice' name='saleprice' required />
        </div>
        <div className='probtn'>
          <button type='submit'>Add</button>
        </div>
      </form>
    </>
  )
}

export default AddSale
