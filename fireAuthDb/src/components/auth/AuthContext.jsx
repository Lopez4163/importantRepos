import React, { createContext, useState, useEffect } from "react"
import { auth } from "../../firebase/firebase"
import { onAuthStateChanged, signOut } from "firebase/auth"
import { db } from "../../firebase/firebase"
import { doc, getDoc } from "firebase/firestore"

// Create context
export const AuthContext = createContext()

// Provider component
export const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null)

  // Function to handle logout
  const handleLogout = async () => {
    try {
      await signOut(auth)
      setAuthUser(null) // Clear user data after logout
      console.log("logged out successfully")
    } catch (error) {
      console.error(error, "logged out unsuccessfully")
    }
  }

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser, handleLogout }}>
      {children}
    </AuthContext.Provider>
  )
}
