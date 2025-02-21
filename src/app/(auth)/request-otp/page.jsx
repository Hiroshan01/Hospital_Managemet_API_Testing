"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import authService from "../../services/authService";

function RequestOTP() {
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

  const validateMobile = (mobile) => {
    const mobileVal = /^(?:\+94|0)?7\d{8}$/; 
    return mobileVal.test(mobile);
  };

  const handleRequestOTP = async (e) => {
    e.preventDefault();
    setError(null);
  
    if (!validateMobile(mobile)) {
      setError("Please enter a valid mobile number.");
      return;
    }
  
    try {
      console.log("Requesting OTP for:", mobile);
      const response = await authService.requestOTP(mobile);
      console.log("OTP Response:", response);
      alert("OTP has been sent to your mobile number!");
      router.push("/signIn");
    } catch (err) {
      console.error("Error Requesting OTP:", err);
      setError(err.response?.data?.message || "OTP request failed.");
    }
  };
  

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-sm bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Request OTP</h2>
        <form onSubmit={handleRequestOTP}>
          <input
            type="text"
            name="mobile"
            placeholder="Mobile Number"
            className="w-full p-2 mb-3 border-b-2 border-gray-300 focus:border-[#ff9900] focus:outline-none"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />
          <button className="w-full bg-gradient-to-r from-[#ff9900] to-[#f2cb00] hover:bg-orange-500 text-white py-2 rounded-lg mt-5">
            Request OTP
          </button>
          {error && <p className="text-[#ff9900] text-sm mt-5">{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default RequestOTP;
