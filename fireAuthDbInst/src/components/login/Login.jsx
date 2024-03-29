import React, { useState, useContext, useEffect } from "react"
import { auth } from "../../firebase/firebase"
import { signInWithEmailAndPassword } from "firebase/auth"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../auth/AuthContext"
import { db } from "../../firebase/firebase"
import { doc, getDoc } from "firebase/firestore"

const Login = () => {
  const { authUser } = useContext(AuthContext)
  const { setAuthUser } = useContext(AuthContext)
  const { handleLogout } = useContext(AuthContext)

  const [isLoggingIn, setIsLoggingIn] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)

  const navigate = useNavigate()

  useEffect(() => {
    // Log authUser.role whenever it changes
    console.log(authUser?.role)
  }, [authUser])

  const signIn = async e => {
    e.preventDefault()
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )
      const userDocRef = doc(db, "users", userCredential.user.uid)
      const userDocSnap = await getDoc(userDocRef)
      const userData = userDocSnap.data()
      const role = userData ? userData.role : "unknown" // Default role if user data doesn't exist
      setAuthUser({
        ...userCredential.user,
        role: role,
      })
      console.log("logged in successfully", userCredential.user)

      navigate("/home", { replace: true }) // Redirect to Home

      // navigate("/home", { replace: true }) // Redirect to Home
    } catch (error) {
      console.error("Login failed:", error)
      setError(getErrorMessage(error.code))
    }
  }

  const getErrorMessage = errorCode => {
    switch (errorCode) {
      case "auth/wrong-password":
        return "Incorrect email or password."
      case "auth/user-not-found":
        return "User not found."
      default:
        return "An error occurred. Please try again."
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
    </div>
  )
}

export default Login
