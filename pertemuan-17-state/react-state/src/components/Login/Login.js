import React, { useState } from "react";

function Login() {
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

  console.log(user);

  return (
    <div>
      <form>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
        <button>Kirim</button>
      </form>
    </div>
  );
}

export default Login;
