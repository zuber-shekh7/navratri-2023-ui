import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { login, logout } from "../../redux/reducers/authReducer";

const Header = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const handleClick = () => {
    if (isAuthenticated) {
      dispatch(logout());
    } else {
      dispatch(login());
    }
  };

  return (
    <nav className="bg-red-500 py-4 px-10 opacity">
      <div className="mx-auto">
        <div className="flex justify-between items-center">
          <div className="">
            <h1 className="text-white font-bold text-3xl uppercase flex items-center gap-x-2">
              Navratri <span className="text-xl">2K23</span>
            </h1>
          </div>
          <div>
            <ul className="flex justify-around items-center gap-x-2 text-white uppercase font-semibold">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/events">Events</Link>
              </li>
              <li>
                <button onClick={handleClick} to="/auth/login">
                  {isAuthenticated ? "LOGOUT" : "LOGIN"}
                </button>
              </li>
              <li>
                <Link to="/dashboard">User</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
