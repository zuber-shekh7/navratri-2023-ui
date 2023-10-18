import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="flex flex-col gap-y-5 justify-center items-center h-screen bg-gray-50">
        <h1 className="text-6xl font-bold uppercase text-blue-500">
          Lost your <span className="text-yellow-500">way</span>
        </h1>
        <Link
          className="px-4 py-2 bg-red-500 rounded-lg text-white text-2xl font-bold shadow hover:bg-red-600"
          to="/"
        >
          Go to Home
        </Link>
      </div>
    </>
  );
};

export default NotFound;
