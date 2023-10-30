import React, { useEffect, useState } from "react";

import { useSendOtpMutation, useVerifyOtpMutation } from "../../apis/authAPI";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/reducers/authReducer";
import { useDispatch } from "react-redux";
import useLocalStorage from "../../utils/hooks/useLocalStorage";

const Login = () => {
  const [isOtpsent, setIsOtpSent] = useState(false);
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const { setItem } = useLocalStorage();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [sendOtp, { isLoading, isFetching, isError, isSuccess }] =
    useSendOtpMutation();

  const [
    verifyOtp,
    {
      isLoading: verifyOtpIsLoading,
      isFetching: verifyOtpIsFetching,
      isError: verifyOtpIsError,
      isSuccess: verifyOtpIsSuccess,
      data,
    },
  ] = useVerifyOtpMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success("OTP sent successfully", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "light",
      });
      setIsOtpSent(true);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (verifyOtpIsSuccess && data) {
      toast.success("OTP verified successfully", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "light",
      });

      dispatch(login({ token: data.data.token, user: data.data.user }));
      setItem("token", data.data.token);
      setItem("user", JSON.stringify(data.data.user));
      navigate("/dashboard");
    } else if (verifyOtpIsError) {
      toast.failed("OTP verification failed");
    }
  }, [verifyOtpIsSuccess]);

  const handleSendOtp = async () => {
    await sendOtp({ mobileNumber: `+91${mobile}` });
  };

  const handleVerifyOtp = async () => {
    await verifyOtp({ otp, mobileNumber: `+91${mobile}` });
  };

  const showLoader =
    isLoading || isFetching || verifyOtpIsLoading || verifyOtpIsLoading;

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
              className="flex items-center justify-center gap-x-5 py-2 px-4 bg-blue-500 text-white  font-bold rounded-lg shadow-sm border"
              type="button"
              placeholder="123456"
              id="otp"
              onClick={isOtpsent ? handleVerifyOtp : handleSendOtp}
            >
              {showLoader && (
                <>
                  <svg
                    class="animate-ping h-4 w-4 rounded-full border-2 border-white "
                    viewBox="0 0 24 24"
                  ></svg>{" "}
                </>
              )}
              {isOtpsent ? "Verify OTP" : "Send OTP"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
