import React from 'react'
import "../nav_styles.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="nav active">
        <Link to="/" className="site-title">Site Name</Link>
        <ul>
            <li>
                <Link to="/login">Login</Link>
            </li>
            <li>
                <Link to="/Signup">Sign Up</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar