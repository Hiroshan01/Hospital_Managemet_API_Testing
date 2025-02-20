"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from 'next/image';
import img1 from '../../../../public/signIn.jpg';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { LiaLinkedinIn } from 'react-icons/lia';
import authService from "../../services/authService";

function Page() {
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

  const validateMobile = (mobile) => {
    const mobileRegex = /^(?:\+94|0)?7\d{8}$/; //mobile validetion
    return mobileRegex .test(mobile);
  };


  // Make this function async
  const handleSignIn = async (event) => {
    event.preventDefault(); 
    setError(null)

    if (!validateMobile(mobile)) {
      setError("Please enter a valid mobile number.");
      return;
    }



    try {
      const response = await authService.signInWithOtp(mobile, otp);
      localStorage.setItem("token", response.token); // Store JWT token
      alert("Sign-in successful!");
      router.push("/"); 
    } catch (err) {
      setError(err.response?.data?.message || "Sign-in failed.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-[1000px] bg-gradient-to-l from-[#ff9900] to-[#f2cb00] rounded-[20px] flex flex-col lg:flex-row overflow-hidden h-auto lg:h-[500px]">
        {/* Left Side Image */}
        <div className="hidden lg:flex  items-center p-2 w-1/2">
          <Image src={img1} className="rounded-[20px] object-cover border-none" alt="Sign in" />
        </div>

        {/* Right Side Form */}
        <div className="bg-white flex flex-col justify-center rounded-[20px] items-center w-full lg:w-[70%] p-6 lg:p-10">
          <h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>
          <form className="w-full max-w-xs sm:max-w-sm md:max-w-md" onSubmit={handleSignIn}>
            <input
              type="text"
              name="mobile"
              placeholder="Mobile Number"
              className="w-full p-2 mb-3 border-b-2 border-gray-300 focus:border-[#ff9900] focus:outline-none"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
            <input
              type="otp"
              name="otp"
              placeholder="OTP Code"
              className="w-full p-2 mb-3 border-b-2 border-gray-300 focus:border-[#ff9900] focus:outline-none mt-6"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
            <button type="submit" className="w-full bg-gradient-to-l from-[#ff9900] to-[#f2cb00] hover:bg-orange-500 text-white py-2 rounded-[20px] mt-10">
              Sign In
            </button>
            {error && <p className="text-[#ff9900] text-sm mt-5 ml-2">{error}</p>}
          </form>

          {/* Social Sign In */}
          <div className="flex flex-col items-center w-full mt-6">
            <div className="flex items-center w-full max-w-sm">
              <div className="flex-grow border-t border-gray-400"></div>
              <span className="px-2 text-gray-400">Or sign up with</span>
              <div className="flex-grow border-t border-gray-400"></div>
            </div>
          </div>
          <div className="flex gap-3 mt-4 flex-wrap justify-center">
            <button className="p-2 rounded-full border border-black">
              <FcGoogle size={18} />
            </button>
            <button className="p-2 rounded-full border border-black bg-white text-blue-600">
              <FaFacebookF size={18} />
            </button>
            <button className="p-2 rounded-full border border-black bg-white text-gradient-to-r from-purple-500 via-pink-500 to-yellow-500">
              <FaInstagram size={18} />
            </button>
            <button className="p-2 rounded-full border border-black bg-white text-blue-600">
              <FaTwitter size={18} />
            </button>
            <button className="p-2 rounded-full border border-black bg-white text-blue-600 hover:bg-blue-900">
              <LiaLinkedinIn size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
