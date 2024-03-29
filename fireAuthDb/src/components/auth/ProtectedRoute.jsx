import React, { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { AuthContext } from "../auth/AuthContext"

const ProtectedRoute = ({ roles }) => {
  console.log("Entering protected route")
  const { authUser } = useContext(AuthContext)

  if (!authUser) {
    console.log("You are not logged in, user is not authenticated")
    return <Navigate to="/login" replace />
  }
  if (!roles.includes(authUser.role)) {
    return <Navigate to="/unauthorized" replace />
  }
  return <Outlet />
}

export default ProtectedRoute
