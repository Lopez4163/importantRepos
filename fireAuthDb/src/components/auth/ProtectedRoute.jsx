import React, { useEffect, useContext } from "react"
import { useNavigate, Outlet } from "react-router-dom"
import { AuthContext } from "./AuthContext"

const ProtectedRoute = ({ role }) => {
  const navigate = useNavigate()
  const { authUser } = useContext(AuthContext)
}

export default ProtectedRoute

// import React, { useContext, useEffect } from "react"
// import { useNavigate, Outlet } from "react-router-dom"
// import { AuthContext } from "../auth/AuthContext"

// const ProtectedRoute = ({ role }) => {
//   const { authUser } = useContext(AuthContext)
//   const { updateState } = useContext(AuthContext)

//   const renderOutlet = () => {
//     if (authUser) {
//       console.log("User is authenticated")
//       return <Outlet /> // Render Outlet if user is authenticated
//     } else {
//       console.log("User is not authenticated")
//       // Redirect to login page or handle unauthorized access
//       return <Outlet />
//     }
//   }

//   renderOutlet()
// }

// export default ProtectedRoute
