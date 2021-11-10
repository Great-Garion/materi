import { useContext } from "react"
import { UserContext } from "../context/UserProvider"

function ButtonProfile(props) {
  let { profile } = props

  const { isLogin, setIsLogin } = useContext(UserContext)
  console.log(isLogin)

  const handleClick = () => {
    setIsLogin(!isLogin)
  }
  
  return (
    <div>
      <button onClick={handleClick}>{isLogin + ""}</button>
    </div>
  )
}

export default ButtonProfile
