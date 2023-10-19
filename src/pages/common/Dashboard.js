import React from "react";

const Dashboard = () => {
  return (
    <section className="w-8/12 mx-auto">
      <div className="flex justify-between mt-12 mb-6 items-end">
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <div className="flex justify-around items-center gap-x-2">
          <div className="h-8 w-8 bg-blue-500 rounded-full"></div>
          <h1 className="text-xl font-bold">Username</h1>
        </div>
      </div>
      <div className="border my-6"></div>
      <div className="border rounded-lg flex">
        <div className="w-9/12 px-5 py-6 bg-gray-50">
          <h1 className="text-2xl font-bold">Tickets</h1>
          <div className="border my-5"></div>
          <div className="flex flex-col gap-y-5">
            {new Array(9).fill("").map((item) => {
              return (
                <div className="h-20 bg-green-500 w-5/12 px-2 py-2 rounded-lg shadow-md text-white">
                  <div className="flex justify-between items-center">
                    <h3 className="text-md font-semibold">Event Name</h3>
                    <div>
                      <h3 className="text-xs font-semibold">
                        Date: 24/10/2023
                      </h3>
                      <h3 className="text-xs font-semibold">8:00 PM</h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-3/12 bg-gray-100 px-5 py-6 border-l">
          <div className="flex justify-between items-center">
            <h2>First Name:</h2>
            <h2>Zuber</h2>
          </div>
          <div className="flex justify-between items-center mt-3">
            <h2>Last Name:</h2>
            <h2>Shekh</h2>
          </div>
          <div className="flex justify-between items-center mt-3">
            <h2>Mobile:</h2>
            <h2>+91987654321</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
