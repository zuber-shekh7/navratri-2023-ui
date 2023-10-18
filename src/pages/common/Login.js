import React, { useState } from "react";

const Login = () => {
  const [isOtpsent, setIsOtpSent] = useState(false);
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");

  return (
    <section className="flex justify-center">
      <div className="w-11/12 lg:w-4/12 bg-gray-100 my-12 px-5 py-5 rounded-xl border-2 shadow-sm">
        <div className="mb-12 mt-6">
          <h1 className="text-center font-bold text-2xl lg:text-4xl uppercase bg-gray">
            Login
          </h1>
        </div>
        <div>
          <div className="flex flex-col gap-y-2">
            <label className="font-medium text-base" htmlFor="mobile">
              Mobile Number
            </label>
            <input
              className="py-2 px-4 rounded-lg shadow-sm border"
              type="text"
              placeholder="9876543210"
              id="mobile"
              disabled={isOtpsent}
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>{" "}
          {isOtpsent && (
            <div className="flex flex-col gap-y-2 mt-5">
              <label className="font-medium text-base" htmlFor="otp">
                OTP (One Time Password)
              </label>
              <input
                className="py-2 px-4 rounded-lg shadow-sm border"
                type="text"
                placeholder="123456"
                id="otp"
                onChange={(e) => setOtp(e.target.value)}
              />
            </div>
          )}
          <div className="flex flex-col gap-y-2 mt-5">
            <button
              className="py-2 px-4 bg-blue-500 text-white  font-bold rounded-lg shadow-sm border"
              type="text"
              placeholder="123456"
              id="otp"
              onClick={() => setIsOtpSent(!isOtpsent)}
            >
              {isOtpsent ? "Verify OTP" : "Send OTP"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
