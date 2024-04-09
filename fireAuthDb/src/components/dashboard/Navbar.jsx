import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../auth/AuthContext"

const Navbar = () => {
  const { handleLogout } = useContext(AuthContext)

  return (
    <div>
      <div>
        <div>
          <button onClick={handleLogout}>Logout</button>
        </div>
        <div>
          <button>
            <Link to="/student/tester">Go to Tester</Link>
          </button>
        </div>
        <div>
          <button>
            <Link to="">Tester</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
