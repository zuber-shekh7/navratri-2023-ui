import React from "react";
import { useGetCustomerQuery } from "../../apis/customerApi";
import useAuth from "../../utils/hooks/useAuth";

const Dashboard = () => {
  const { user } = useAuth();
  const { data, isLoading, error } = useGetCustomerQuery(user._id);

  if (isLoading) {
    return (
      <section className="w-8/12 mx-auto">
        <div className="flex justify-between mt-12 mb-6 items-end">
          <div className="text-4xl font-bold h-10 rounded w-4/12 bg-gray-300 animate-pulse"></div>
          <div className="text-4xl font-bold h-10 rounded w-3/12 bg-gray-300 animate-pulse"></div>
        </div>
        <div className="border my-6"></div>
        <div className="border rounded-lg flex">
          <div className="w-8/12 px-5 py-6 bg-gray-50">
            <div className="text-4xl font-bold h-10 rounded w-3/12 bg-gray-300 animate-pulse"></div>
            <div className="border my-5"></div>
          </div>
          <div className="w-4/12 bg-gray-100 px-5 py-6 border-l">
            <div className="flex justify-between items-center">
              <div className="text-4xl font-bold h-8 rounded w-4/12 bg-gray-300 animate-pulse"></div>
              <div className="text-4xl font-bold h-8 rounded w-4/12 bg-gray-300 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-8/12 mx-auto">
      <div className="flex justify-between mt-12 mb-6 items-end">
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <div className="flex justify-around items-center gap-x-2">
          <div className="h-8 w-8 bg-blue-500 rounded-full"></div>
          <h1 className="text-xl font-bold capitalize">
            {data.data.user.firstName}
          </h1>
        </div>
      </div>
      <div className="border my-6"></div>
      <div className="border rounded-lg flex">
        <div className="w-8/12 px-5 py-6 bg-gray-50">
          <h1 className="text-2xl font-bold capitalize">
            Welcome {data.data.user.firstName} {data.data.user.lastName}
          </h1>
          <div className="border my-5"></div>
        </div>
        <div className="w-4/12 bg-gray-100 px-5 py-6 border-l">
          <div className="flex justify-between items-center">
            <h2>First Name:</h2>
            <h2 className="font-bold capitalize">{data.data.user.firstName}</h2>
          </div>
          <div className="flex justify-between items-center mt-3">
            <h2>Last Name:</h2>
            <h2 className="font-bold capitalize">{data.data.user.lastName}</h2>
          </div>
          <div className="flex justify-between items-center mt-3">
            <h2>Mobile:</h2>
            <h2 className="font-bold">{data.data.user.mobile}</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
