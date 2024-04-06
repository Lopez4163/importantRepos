// ProtectedRoute.jsx
import React, { useContext, useEffect } from "react"
import { useNavigate, Outlet } from "react-router-dom"
import { AuthContext } from "./AuthContext"
import Dashboard from "../../views/Dashboard" // Import the Dashboard component

const ProtectedRoute = () => {
  const { authUser, isLoading } = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    console.log("checking user Protected Route:", authUser)
    if (!isLoading && !authUser) {
      console.log("User is not authenticated")
      navigate("/unauthorized")
    }
  }, [isLoading, authUser, navigate])

  if (isLoading) {
    return (
      <div>
        <h1>Loading....</h1>
      </div>
    )
  }
  if (!authUser) {
    return (
      <div>
        <h1>Unauthorized Access</h1>
      </div>
    )
  }

  return <Dashboard />
}

export default ProtectedRoute
