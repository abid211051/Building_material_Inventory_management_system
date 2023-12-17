import React from 'react'

const RemoveCustomer = () => {
    const removeProduct = async (e) => {
        e.preventDefault();
        const id = e.target.cusid.value;
        try {
            const response = await fetch(`https://localhost:7066/api/Customers/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(response.status);
            }
            window.location.reload();

        } catch (error) {
            console.error('Error deleting product:', error.message);
        }
    }
    return (
        <>
            <form action="" onSubmit={removeProduct}>
                <div>
                    <label htmlFor="">Customer ID:</label>
                    <input type="number" placeholder='Customer ID' name='cusid' required/>
                </div>
                <div className='probtn'>
                    <button type='submit'>Delete</button>
                </div>
            </form>
        </>
    )
}

export default RemoveCustomer
