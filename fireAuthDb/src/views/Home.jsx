import React, { useContext } from "react"
import { AuthContext } from "../components/auth/AuthContext"

const Home = () => {
  const { authUser } = useContext(AuthContext)
  const { handleLogout } = useContext(AuthContext)
  return (
    <div>
      <h1>Home</h1>
      <h2>test</h2>
      <h3>
        signed in as {authUser.email} - {authUser.role}
      </h3>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Home
