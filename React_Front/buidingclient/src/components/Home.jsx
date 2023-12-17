import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const handlelogin = async (e) => {
    e.preventDefault();
    const data = {
      username: e.target.username.value,
      useremail: '',
      userpass: e.target.password.value,
      userrole: 'admin'
    }
    try {
      const response = await fetch('https://localhost:7066/api/Users/Login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(response.status);
      }
      // const resdata = await response.json();
      localStorage.setItem('islogin', 'yes');
      navigate('/dasboard');
    } catch (error) {
      console.error('Error during POST request:', error.message);
    }
  }
  return (
    <>
      <div className='homecontainer'>
        <div>
          <h2>Building Material Inventory</h2>
        </div>
        <div className='loginform'>
          <p>Authorized Member Only <span>*</span></p>
          <form action="" onSubmit={handlelogin}>
            <div>
              <label htmlFor="">Username:<span>*</span></label>
              <input type="text" placeholder='Username' name='username' required />
            </div>
            <div>
              <label htmlFor="">Password:<span>*</span></label>
              <input type="text" placeholder='Password' name='password' required />
            </div>
            <button type='submit'>Sign IN</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Home
