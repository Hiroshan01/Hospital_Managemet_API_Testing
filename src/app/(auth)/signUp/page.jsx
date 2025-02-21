"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import Image from 'next/image';
import img1 from '../../../../public/imgSignUp.jpg';
import authService from "../../services/authService"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from "next/link";
import { signIn } from "next-auth/react";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();
  
  const handleGoogleSignUp = async () => {
    try {
      await signIn("google", { callbackUrl: "/" });
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  useEffect(() => {
    
    document.body.removeAttribute('data-new-gr-c-s-check-loaded');
    document.body.removeAttribute('data-gr-ext-installed');
  }, []);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validateMobile = (mobile) => {
    const regex = /^(?:\+94|0)?7\d{8}$/; 
    return regex.test(mobile);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError(null);

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!validateMobile(mobile)) {
      setError("Please enter a valid mobile number.");
      return;
    }

    try {
      await authService.signUp(name, email, mobile); 
      toast.success("Sign-up successful! Please request OTP.");
      router.push("/request-otp");
    } catch (err) {
      setError(err.response?.data?.message || "Sign-up failed.");
    }
  };
 

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-[1000px] bg-gradient-to-r from-[#ff9900] to-[#f2cb00] rounded-[20px] flex flex-col lg:flex-row overflow-hidden">
        {/* Left Side Image */}
        <div className="hidden lg:flex justify-center items-center p-4 w-1/2">
          <Image
            src={img1}
            className="rounded-[20px] object-cover border-none"
            alt="Sign Up"
          />
        </div>

        {/* Right Side Form */}
        <div className="bg-white flex flex-col justify-center rounded-[20px] items-center w-full lg:w-[70%] p-6 lg:p-8">
          <h2 className="text-2xl font-bold mb-4 text-center">Create Account</h2>
          <form className="w-full max-w-xs sm:max-w-sm md:max-w-md" onSubmit={handleSignUp}>
            <input
              type="text"
              name="name"
              placeholder="User Name"
              className="w-full p-2 mb-3 border-b-2 border-gray-300 focus:border-[#ff9900] focus:outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-2 mb-3 border-b-2 border-gray-300 focus:border-[#ff9900] focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="text"
              name="mobile"
              placeholder="Mobile Number"
              className="w-full p-2 mb-3 border-b-2 border-gray-300 focus:border-[#ff9900] focus:outline-none"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
            <div className="flex items-center mb-3 mt-5">
              <input
                type="checkbox"
                className="mr-2 form-checkbox h-5 w-5 text-orange-600 focus:ring-orange-500"
                required
              />
              <span className="text-sm">
                I agree to the 
                <a href="#" className="text-[#ff9900] hover:underline mx-1">Terms of Service</a>
                and
                <a href="#" className="text-[#ff9900] hover:underline ml-1">Privacy Policy</a>
              </span>
            </div>
            <button className="w-full bg-gradient-to-r from-[#ff9900] to-[#f2cb00] hover:bg-orange-500 text-white py-2 rounded-[20px] mt-5">
              Sign Up
            </button>
            {error && <p className="text-[#ff9900] text-sm mt-5 ml-2">{error}</p>}
          </form>

          {/* Social Sign Up */}
          <div className="flex flex-col items-center w-full mt-6">
            <div className="flex items-center w-full max-w-sm">
              <div className="flex-grow border-t border-gray-400"></div>
              <span className="px-2 text-gray-400">Or sign up with</span>
              <div className="flex-grow border-t border-gray-400"></div>
            </div>
            <div className="flex gap-3 mt-4">
            <button 
            className="flex items-center justify-center p-2 rounded-full border border-black bg-white hover:bg-gray-100 transition duration-200"
            onClick={handleGoogleSignUp}
          >
            <FcGoogle size={18} className="mr-2" />
            <span className="text-sm font-semibold">Continue with Google</span>
          </button>

            </div>
          </div>

          <p className="text-sm text-gray-600 mt-4">
            Already have an account?{' '}
            <Link href="/signIn" className="text-[#ff9900] hover:underline">
              Login
            </Link>
          </p>

     
        </div>
      </div>
    </div>
  );
}

export default SignUp;
