export const GetProduct = async ()=>{
    try {
        const response = await fetch('https://localhost:7066/api/Products')
  
        if (!response.ok) {
          throw new Error(response.status);
        }
        const resdata = await response.json();
        return resdata;
      } catch (error) {
        console.error('Error during Get request:', error.message);
        return null;
      }
}