import React, { useEffect } from 'react'

const EditCustomer = () => {
    const editProduct = async (e) => {
        e.preventDefault();
        let id = e.target.cusid.value;
        let name = e.target.customername.value;
        let phone = e.target.customerphone.value;
        let data = {
            cusid: id,
            customername: name,
            customerphone: phone,
        }
        try {
            const response = await fetch(`https://localhost:7066/api/Customers/${id}`, {
                method: 'PUT',
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
            console.error('Error during PUT request:', error.message);
        }
    }

    return (
        <>
            <form action="" onSubmit={editProduct}>
                <div>
                    <label htmlFor="">Customer ID:</label>
                    <input type="number" placeholder='Customer id' name='cusid' required/>
                </div>
                <div>
                    <label htmlFor="">Customer Name:</label>
                    <input type="text" placeholder='Customer Name' name='customername' required/>
                </div>
                <div>
                    <label htmlFor="">Customer Phone:</label>
                    <input type="text" placeholder='Customer Phone (10 number)' name='customerphone' required/>
                </div>
                <div className='probtn'>
                    <button type='submit'>Edit</button>
                </div>
            </form>
        </>
    )
}

export default EditCustomer
