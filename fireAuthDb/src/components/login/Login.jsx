import React, { useState, useContext, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../auth/AuthContext"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)
  const { handleSignIn, handleLogout } = useContext(AuthContext)

  const signIn = async e => {
    e.preventDefault()
    try {
      console.log("attempting to sign in")
      await handleSignIn({ email, password })
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div>
      <div>
        <form onSubmit={signIn}>
          <h1>Login</h1>
          <input
            type="email"
            placeholder="enter email"
            value={email}
            onChange={e => {
              setEmail(e.target.value)
            }}
          />
          <input
            type="password"
            placeholder="enter password"
            value={password}
            onChange={e => {
              setPassword(e.target.value)
            }}
          />
          <button type="submit">Login</button>
        </form>
        <div>
          <Link to="/register">SignUp?</Link>
        </div>
      </div>
      <button onClick={handleLogout}>signOut</button>
    </div>
  )
}

export default Login
