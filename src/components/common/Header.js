import React from "react";
import { Link, useNavigate } from "react-router-dom";

import useAuth from "../../utils/hooks/useAuth";
import { toast } from "react-toastify";

const Header = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully.");
    navigate("/auth/login");
  };

  return (
    <nav className="bg-black py-6 px-10 shadow-lg">
      <div className="mx-auto">
        <div className="flex justify-between items-center">
          <div className="">
            <h1 className="text-white font-bold text-3xl uppercase flex items-center gap-x-2">
              Navratri <span className="text-xl">2K23</span>
            </h1>
          </div>
          <div>
            <ul className="flex justify-around items-center gap-x-2 uppercase font-bold text-white">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/events">Events</Link>
              </li>

              {isAuthenticated ? (
                <>
                  <li>
                    <Link to="/dashboard">{user.firstName}</Link>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="uppercase"
                      to="/dashboard"
                    >
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <li>
                  <Link to="/auth/login">Login</Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
