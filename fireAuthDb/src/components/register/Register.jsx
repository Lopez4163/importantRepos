import React, { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../auth/AuthContext"

// import "firebase/firestore" // Required for Firestore usage

const Register = () => {
  const { createUserAndDb } = useContext(AuthContext)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const signUp = async e => {
    e.preventDefault()
    try {
      const newUserData = {
        name,
        email,
        password,
      }
      console.log("newUserData constructed", newUserData)
      await createUserAndDb(newUserData)
      console.log("User created successfully! Data stored in Firestore.")
    } catch (error) {
      console.error(error, "Signup failed")
    }
  }

  return (
    <div>
      <form onSubmit={signUp}>
        <h1>create account</h1>
        <input
          type="text"
          placeholder="enter name"
          value={name}
          onChange={e => {
            setName(e.target.value)
          }}
        />
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
        <button type="submit">Sign Up</button>
      </form>
      <div>
        <Link to="/">Login?</Link>
      </div>
    </div>
  )
}

export default Register
