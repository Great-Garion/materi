import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

function User() {
  const history = useHistory()
  const [users, setUsers] = useState([])

  useEffect(async () => {
    const token = Cookies.get("token");
    if (!token) history.push("/login")

    const api = "http://garion-mall.herokuapp.com/user";
    const {data} = await axios.get(api, {
      headers: { Authorization: `Bearer ${token}` },
    });

    setUsers(data)
  }, []);

  return <div>
    {users.map(user => (
      <p key={user._id}>{user.fullname}</p>
    ))}
  </div>;
}

export default User;
