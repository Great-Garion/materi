import { Link } from "react-router-dom"

function Nav() {
  return (
    <div>
      <Link to="/">Home</Link> <br/>
      <Link to="/login">Login</Link>

    </div>
  )
}

export default Nav
