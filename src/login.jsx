import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './login.css';

async function loginUser(credentials) {
 return fetch('http://localhost:8080/login', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(credentials)
 })
   .then(data => data.json())
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

  return(
    <div className="card text-dark  mb-3 mt-5 m-auto" style={{"max-width": "30rem","backgroundColor":"#CFE2FF"}}>
    <div className="card-header"><h3 style={{ color: '#DC3545' }}> Please LOG In First</h3></div>
    <div className="card-body">
      <h5 className="card-title" style={{ color: '#DC3545' }} ></h5>
      <div className="card-text">
    <div className="login-wrapper ">
      {/* <h3>Please Log In First</h3> */}
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input className='m-2' type="text" onChange={e => setUserName(e.target.value)} />
        </label>
        <br></br>
        <label>
          Password
          <input className='m-2' type="password" onChange={e => setPassword(e.target.value)} />
        </label>
        <div className='m-auto text-center'>
          <button  className='btn btn-danger' type="submit">Submit</button>
        </div>
      </form>
    </div>
    </div>
    </div>
   
  </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};