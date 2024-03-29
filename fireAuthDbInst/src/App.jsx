import { useState } from "react"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import Home from "./views/Home"
import ProtectedRoute from "./components/auth/ProtectedRoute"
import Unauthorized from "./views/Unauthorized"
import { AuthProvider } from "./components/auth/AuthContext"

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} /> {/* Login at /login */}
          <Route
            path="/home"
            element={
              <ProtectedRoute roles={["instructor"]} /> // Protected Home route
            }
          >
            <Route index element={<Home />} />{" "}
            {/* Home as default within ProtectedRoute */}
          </Route>
          <Route path="/register" element={<Register />} />{" "}
          {/* Register route */}
          <Route path="/unauthorized" element={<Unauthorized />} />{" "}
          {/* Unauthorized route */}
          {/* <Route path="/auth-details" element={<AuthDetails />} /> */}
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
