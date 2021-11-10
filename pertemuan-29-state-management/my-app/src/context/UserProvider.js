import { createContext, useState } from "react"

export const UserContext = createContext()

function UserProvider(props) {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <UserContext.Provider value={{isLogin, setIsLogin}}>
      {props.children}
      {/* <App /> */}
    </UserContext.Provider>
  )
}

export default UserProvider
