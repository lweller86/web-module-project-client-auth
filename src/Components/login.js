
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios";


const Login = () => {
  return (<div>
    <h1>Login</h1>
    <form>
      <div>
      <label htmlFor="username">Username:</label>
    <input id="username"/>
</div>
<div>
    <label htmlFor="password">Password:</label>
    <input type="password" id="password"/>

      </div>
      <button>Submit</button>
    </form>
   
  </div>)
}

  export default Login;