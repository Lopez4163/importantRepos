import React, { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { auth, db } from "../../firebase/firebase" // Import auth and db
import { createUserWithEmailAndPassword } from "firebase/auth"
import { addDoc, setDoc, doc, collection } from "firebase/firestore" // Import from firestore

// import "firebase/firestore" // Required for Firestore usage

const Register = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const signUp = async e => {
    e.preventDefault()

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )

      const userData = {
        email,
        name,
        role: "instructor", // Hardcoded role (consider user selection if needed)
      }

      await setDoc(doc(db, "users", userCredential.user.uid), userData)

      console.log("User created successfully! Data stored in Firestore.")
      // Handle successful signup (e.g., redirect to login or profile)
    } catch (error) {
      console.error(error, "Signup failed")
      // Handle signup errors (display user-friendly messages)
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
        <Link to="/login">Login?</Link>
      </div>
    </div>
  )
}

export default Register
