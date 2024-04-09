// ProtectedRoute.jsx
import React, { useContext, useEffect, useState } from "react"
import { useNavigate, useLocation, Outlet, Navigate } from "react-router-dom"
import { AuthContext } from "./AuthContext"

const ProtectedRoute = ({ allowedRole }) => {
  const [tracking, setTracking] = useState(true)
  const { authUser, isLoading, isNavigating, setIsNavigating } =
    useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const checkingUser = async () => {
      try {
        console.log("role", authUser.role)
        if (!isLoading && !authUser) {
          console.log("User is not authenticated or found")
          navigate("/unauthorized")
        } else if (authUser.role !== allowedRole) {
          console.log("User does not have the required role")
          navigate("/unauthorized")
        }
      } catch (err) {
        console.log(err.message)
      } finally {
        setIsNavigating(false)
      }
    }

    checkingUser()
  }, [allowedRole, authUser, isLoading, navigate, setIsNavigating])

  if (isNavigating) {
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
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default ProtectedRoute
