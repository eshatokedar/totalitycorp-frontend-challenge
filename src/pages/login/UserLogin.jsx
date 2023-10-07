import React, { useState } from 'react';
import {FcGoogle} from "react-icons/fc"
import "./login.css";

export const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <h2>Login: </h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <br/>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <br/>

        <label htmlFor="password">Password:</label>
        <br/>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br/>

        <button type="submit" className="btn">
         <p>Sign In</p>
        </button>
      </form>

        <button className="btn-google">
          <FcGoogle style={{marginRight:"0.3rem"}}/>
          Continue with Google
        </button>

      <div className="forgot-password">
        <a href="/forgot-password">
          Forgot Password?
        </a>
      </div>
    </div>
  );
};


