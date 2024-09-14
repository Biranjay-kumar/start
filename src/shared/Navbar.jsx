import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          MyApp
        </Link>
        <div className="space-x-4">
          <Link to="/" className="hover:bg-blue-700 px-3 py-2 rounded-lg">
            Home
          </Link>
          <Link to="/login" className="hover:bg-blue-700 px-3 py-2 rounded-lg">
            Login
          </Link>
          <Link
            to="/register"
            className="hover:bg-blue-700 px-3 py-2 rounded-lg"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
