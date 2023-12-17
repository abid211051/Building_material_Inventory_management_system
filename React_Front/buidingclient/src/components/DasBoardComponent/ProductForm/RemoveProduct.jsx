import React from 'react'

const RemoveProduct = () => {
    const removeProduct = async (e) => {
        e.preventDefault();
        const id = e.target.proid.value;
        try {
            const response = await fetch(`https://localhost:7066/api/Products/${id}`, {
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
                    <label htmlFor="">Product ID:</label>
                    <input type="number" placeholder='Product ID' name='proid' required/>
                </div>
                <div className='probtn'>
                    <button type='submit'>Delete</button>
                </div>
            </form>
        </>
    )
}

export default RemoveProduct
