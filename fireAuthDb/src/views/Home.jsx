import React, { useContext } from "react"
import { AuthContext } from "../components/auth/AuthContext"

const Home = () => {
  const { handleLogout, authUser } = useContext(AuthContext)

  return (
    <div>
      <h1>home</h1>
      {authUser ? (
        <div>
          <h1>Welcome, {authUser.name}</h1>
          <p>Email: {authUser.email}</p>
          <p>Role: {authUser.role}</p>
          <button onClick={handleLogout}>SignOut</button>
        </div>
      ) : (
        <div>
          <h1>...Loading</h1>
          <button onClick={handleLogout}>Log Out</button>
        </div>
      )}
    </div>
  )
}

export default Home
