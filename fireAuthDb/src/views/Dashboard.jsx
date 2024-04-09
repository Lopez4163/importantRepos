import React, { useState, useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../components/auth/AuthContext"
import Display from "../components/dashboard/Display"
import Navbar from "../components/dashboard/Navbar"
import ProfileInfo from "../components/dashboard/ProfileInfo"

const Dashboard = () => {
  const { authUser, handleLogout } = useContext(AuthContext)
  console.log("rendered dashboard")

  return (
    <div>
      {authUser ? (
        <div>
          <Navbar />
          <ProfileInfo />
          <Display />
        </div>
      ) : (
        <div>
          <h1>Loading......</h1>
        </div>
      )}
    </div>
  )
}

export default Dashboard
