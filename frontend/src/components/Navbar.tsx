import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    auth?.logout(); // අර Context එකේ තියෙන logout ෆන්ක්ෂන් එක කෝල් කරලා බ්‍රව්සර් එකේ දේවල් මකනවා
    navigate("/login"); // ඊටපස්සේ එයාව ලොගින් පිටුවට අරන් යනවා
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto">
        <Link to="/" className="text-blue-400 hover:text-blue-300 mr-4">
          Home
        </Link>
        {auth?.user ? (
          // user කෙනෙක් ඉන්නවා නම් (ලොග් වෙලා නම්) මේ ටික පෙන්නනවා
          <>
            <Link
              to="/write"
              className="text-blue-400 hover:text-blue-300 mr-4"
            >
              Write Article
            </Link>
            <button onClick={handleLogout} className="text-red-400 hover:text-red-300 cursor-pointer">Logout</button>

          </>
        ) : (
          // user කෙනෙක් නෑ නම් (ලොග් වෙලා නෑ නම්) මේ ටික පෙන්නනවා
          <>
            <Link
              to="/login"
              className="text-blue-400 hover:text-blue-300 mr-4"
            >
              Login
            </Link>
            <Link to="/register" className="text-blue-400 hover:text-blue-300">
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
