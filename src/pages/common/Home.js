import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="flex flex-col gap-y-5 justify-center items-center h-screen bg-gray-50">
        <h1 className="text-6xl font-bold uppercase text-blue-500">
          Navratri <span className="text-yellow-500">2023</span>
        </h1>
        <Link
          className="px-4 py-2 bg-red-500 rounded-lg text-white text-2xl font-bold shadow hover:bg-red-600"
          to="/bookings"
        >
          Book Tickets Now
        </Link>
      </div>
    </>
  );
};

export default Home;
