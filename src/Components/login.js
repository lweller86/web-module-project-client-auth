
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import axiosWithAuth from "../Utilities/AxiosWithAuth";


const Login = () => {
  const navigate = useNavigate();

  const [cred, setCred] = useState({
    username: "",
    password: ""
  })

  const handleChange = (e) => {
    setCred({
      ...cred,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth().post('/login', cred)
      .then(resp => {

        localStorage.setItem('token', resp.data.token)
        navigate('/friends');
      })
      .catch(err => {
        console.log(err);
      })

  }
  return (<div>
    <h1>Login</h1>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input onChange={handleChange} name="username" id="username" />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input onChange={handleChange} type="password" name="password" id="password" />

      </div>
      <button>Submit</button>
    </form>
  </div>)
}

export default Login;