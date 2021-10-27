import React, { useState } from "react";
import { useHistory } from 'react-router-dom';

function Login({setIsLogin}) {
  let history = useHistory()

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);

    setUser({
      ...user,
      [e.target.name] : e.target.value,
    })
  }

  const handleLogin = (e) => {
    e.preventDefault()
    setIsLogin(true)
    history.push("/todo")
  }

  console.log(user);

  return (
    <div>

      <h1 className="d-flex flex-column">Login</h1>
      <form>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={user.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={user.password}
          onChange={handleChange}
        />
        <button onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
}

export default Login;
