import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { getUser } = useContext(UserContext)
  const login = async data => {
    const response = await fetch('http://localhost:9000/users/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    console.log(response)
    const reply = await response;
    if (reply.status === 200) {
      alert('login succeeded');
      getUser()
    }
    if (reply.status !== 200) {
      alert('login failed')
    }
  }
  const handleSubmit = e => {
    e.preventDefault();
    const data = { email, password }
    login(data)
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>email</label>
        <input
          type="text"
          name="email"
          onChange={e => setEmail(e.target.value)}
          required
        />
        <label>password</label>
        <input
          type="password"
          name="password"
          onChange={e => setPassword(e.target.value)}
          required
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default LoginForm;
