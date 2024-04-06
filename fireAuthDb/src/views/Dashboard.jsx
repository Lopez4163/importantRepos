import React, { useContext } from "react"
import { AuthContext } from "../components/auth/AuthContext"

const Dashboard = () => {
  const { authUser, handleLogout } = useContext(AuthContext)
  console.log("rendered dashboard")

  return (
    <div>
      {authUser ? (
        <div>
          <h1>{authUser.email}</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h1>Loading......</h1>
        </div>
      )}
    </div>
  )
}

export default Dashboard
