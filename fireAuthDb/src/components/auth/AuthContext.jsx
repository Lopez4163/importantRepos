import { createContext, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth"
import { auth, db } from "../../firebase/firebase"
import { collection, doc, getDoc, setDoc } from "firebase/firestore"
const AuthContext = createContext()

function AuthProvider({ children }) {
  const [authUser, setAuthUser] = useState(null)
  const [updateState, setUpdateState] = useState(false)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isNavigating, setIsNavigating] = useState(false)

  const navigate = useNavigate()

  async function createUserAndDb(newUserData) {
    console.log("CUWAAF funct hit", newUserData)
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        newUserData.email,
        newUserData.password
      )
      const userId = userCredential.user.uid
      const usersRef = collection(db, "users")
      const userDocRef = doc(usersRef, userId)
      await setDoc(userDocRef, {
        uid: userId,
        name: newUserData.name,
        email: newUserData.email,
        role: "student",
      })
      const userData = await fetchUserData(userId)
      console.log("User account created successfully:", userData)
    } catch (error) {
      setError(error)
      console.error("Error creating user:", error)
    }
  }

  async function handleSignIn(loginUserData) {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        loginUserData.email,
        loginUserData.password
      )
      console.log("User Signed in successfully")
      // navigate("/dashboard")
    } catch (error) {
      setError(error)
      console.log("User Signed in failed", error)
    } finally {
    }
  }

  const handleLogout = async () => {
    try {
      await signOut(auth)
      setAuthUser(null)
      console.log("logged out successfully")
      console.log("navigating back to login")
      navigate("/")
      console.log("user after logout", authUser)
    } catch (error) {
      console.error(error, "logged out unsuccessfully")
    }
  }

  async function sendPasswordResetEmail(email) {
    try {
      await firebase.auth().sendPasswordResetEmail(email)
      setError(null) // Clear any previous errors
      console.log("Password reset email sent successfully!")
    } catch (error) {
      setError(error)
    }
  }

  async function fetchUserData(userId) {
    try {
      const usersRef = doc(collection(db, "users"), userId)
      const docSnapshot = await getDoc(usersRef)

      if (docSnapshot.exists) {
        return docSnapshot.data()
      } else {
        return null
      }
    } catch (error) {
      console.error("Error fetching user data:", error)
      throw error
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async user => {
      console.log("auth state listener hit")
      if (user) {
        try {
          const userData = await fetchUserData(user.uid)
          setAuthUser(userData)
          console.log("Authentication state changed:", user)
          setError(null)
        } catch (error) {
          console.error("Error fetching user data:", error)
          setError(error)
        } finally {
          console.log("loading onAuthStateChange Completed")
          setIsLoading(false)
          setIsNavigating(true)
        }
      } else {
        console.log("User is not authenticated")
      }
    })
    return unsubscribe
  }, [])

  useEffect(() => {
    if (isNavigating) {
      console.log("Authenticated user:", authUser)
      navigate("/dashboard")
      setIsNavigating(false)
    } else {
      console.log("User is not authenticated")
    }
  }, [isNavigating])

  return (
    <AuthContext.Provider
      value={{
        authUser,
        createUserAndDb,
        handleSignIn,
        handleLogout,
        sendPasswordResetEmail,
        fetchUserData,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
