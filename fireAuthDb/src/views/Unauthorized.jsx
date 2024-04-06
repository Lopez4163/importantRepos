import React, { useContext } from "react"
import { AuthContext } from "../components/auth/AuthContext"

const Unauthorized = () => {
  const { handleLogout } = useContext(AuthContext)

  return (
    <div>
      <h1>Unauthorized</h1>
      <button onClick={handleLogout}>Sign Out</button>
    </div>
  )
}

export default Unauthorized
