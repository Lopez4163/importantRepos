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
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} /> {/* Login at /login */}
          {/* <Route
            path="/home"
            element={
              <ProtectedRoute role={["student"]}>
                <Home />
              </ProtectedRoute> // Protected Home route
            }
          ></Route> */}
          <Route path="/home" element={<Home />} />{" "}
          <Route path="/register" element={<Register />} />{" "}
          <Route path="/unauthorized" element={<Unauthorized />} />{" "}
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
