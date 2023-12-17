import React from 'react'
import { useNavigate } from 'react-router-dom';

const AddCustomer = () => {
    const addcustomer = async(e)=>{
        e.preventDefault();
        let name = e.target.customername.value;
        let phone = e.target.customerphone.value;
        let data = {
            cusid : 0,
            customername : name,
            customerphone : phone,
        }
        try {
            const response = await fetch('https://localhost:7066/api/Customers', {
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
            <form action="" onSubmit={addcustomer}>
                <div>
                    <label htmlFor="">Customer Name:</label>
                    <input type="text" placeholder='Customer Name' name='customername' required/>
                </div>
                <div>
                    <label htmlFor="">Customer Phone:</label>
                    <input type="text" placeholder='Customer Phone (10 number)' name='customerphone' required/>
                </div>
                <div className='probtn'>
                    <button type='submit'>Add</button>
                </div>
            </form>
        </>
    )
}

export default AddCustomer
