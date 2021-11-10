import { useContext } from "react"
import { UserContext } from "../context/UserProvider"
import ButtonProfile from "./ButtonProfile"

function Nav(props) {
  let { profile } = props
  console.log(profile)



  return (
    <div>
      <h3>Nav</h3>
      <ButtonProfile profile={profile} />
    </div>
  )
}

export default Nav
