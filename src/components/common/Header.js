import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
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
                <Link to="/auth/login">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
