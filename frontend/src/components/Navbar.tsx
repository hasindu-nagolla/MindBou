import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto">
        <Link to="/" className="text-blue-400 hover:text-blue-300 mr-4">
          Home
        </Link>
        <Link to="/login" className="text-blue-400 hover:text-blue-300">
          Login
        </Link>
      </div>
    </nav>
  )
}

export default Navbar