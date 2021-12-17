import { useState } from "react";
import axios from 'axios'
import Cookies from 'js-cookie'
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory()
  
  const [dataLogin, setDataLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setDataLogin({
      ...dataLogin,
      [e.target.name] : e.target.value
    })
  }

  const handleLogin = async (e) => {
    e.preventDefault()

    const api = "http://garion-mall.herokuapp.com/auth/login"

    const {data} = await axios.post(api, dataLogin)
    
    Cookies.set("token", data.token, {expires: 7})

    history.push("/")
  }

  return (
    <div>
      <form>
        <input
          name="email"
          type="email"
          placeholder="email"
          value={dataLogin.email}
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="password"
          value={dataLogin.password}
          onChange={handleChange}
        />
        <button onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
}

export default Login;
