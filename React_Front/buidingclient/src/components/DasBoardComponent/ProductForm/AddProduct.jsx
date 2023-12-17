import React from 'react'
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const addProduct = async(e)=>{
        e.preventDefault();
        let name = e.target.productname.value;
        let sell = e.target.sellprice.value;
        let cost = e.target.costprice.value;
        let brand = e.target.brand.value;
        let quant = e.target.quantity.value;
        let data = {
            proid : 0,
            productname : name,
            sellprice : sell,
            costprice : cost,
            brand : brand,
            quantity : quant
        }
        try {
            const response = await fetch('https://localhost:7066/api/Products', {
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
            <form action="" onSubmit={addProduct}>
                <div>
                    <label htmlFor="">Product Name:</label>
                    <input type="text" placeholder='Product Name' name='productname' required/>
                </div>
                <div>
                    <label htmlFor="">Sell Price:</label>
                    <input type="number" placeholder='Sell Price' name='sellprice' required/>
                </div>
                <div>
                    <label htmlFor="">Cost price:</label>
                    <input type="number" placeholder='Cost Price' name='costprice' required/>
                </div>
                <div>
                    <label htmlFor="">Brand:</label>
                    <input type="text" placeholder='Brand' name='brand' required/>
                </div>
                <div>
                    <label htmlFor="">Quantity:</label>
                    <input type="number" placeholder='Quantity' name='quantity' required/>
                </div>
                <div className='probtn'>
                    <button type='submit'>Add</button>
                </div>
            </form>
        </>
    )
}

export default AddProduct
