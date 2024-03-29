import React, { useState, useEffect } from "react"
import { auth } from "../firebase/firebase"
import { onAuthStateChanged, signOut } from "firebase/auth"

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null)

  useEffect(() => {
    const listen = onAuthStateChanged(auth, user => {
      if (user) {
        setAuthUser(user)
      } else {
        setAuthUser(null)
      }
    })
    return () => {
      listen()
    }
  })
  return (
    <div>
      {authUser ? (
        <>
          {`Signed In as ${authUser.email}`}
          <br></br>
          <button
            onClick={() => {
              signOut(auth)
            }}
          >
            SignOut
          </button>
        </>
      ) : (
        <p> SignedOut In</p>
      )}
    </div>
  )
}

export default AuthDetails
