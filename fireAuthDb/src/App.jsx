import { useState } from "react"
import { useNavigate, Outlet, Navigate } from "react-router-dom"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import ProtectedRoute from "./components/auth/ProtectedRoute"
import Unauthorized from "./views/Unauthorized"
import { AuthProvider } from "./components/auth/AuthContext"
import Dashboard from "./views/Dashboard"
import Tester from "./views/Tester"

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} /> {/* Login at /login */}
          <Route
            path="/student/*"
            element={<ProtectedRoute allowedRole="student" />}
          >
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="tester" element={<Tester />} />
          </Route>
          <Route path="/register" element={<Register />} />{" "}
          <Route path="/unauthorized" element={<Unauthorized />} />{" "}
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
