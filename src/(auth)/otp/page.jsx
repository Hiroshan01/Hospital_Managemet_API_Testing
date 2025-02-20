import React from 'react'

function page() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
    <div className="bg-white p-8 rounded-[20px] shadow-md w-96">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
        OTP Verification
      </h2>
      <p className="text-gray-600 text-center mb-8">
        Enter the verification code we sent to your device
      </p>
      
      <form onSubmit="">
        <div className="flex justify-center gap-3 mb-6">
        
            <input
             /* key={index}*/
             
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
             
            
              className="w-14 h-14 text-center text-2xl font-bold border-2 border-gray-300 rounded-lg focus:border-[#ff9900] focus:ring-2 focus:ring-orange-200 outline-none transition-all"
              required
            />
            <input
             /* key={index}*/
             
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
             
            
              className="w-14 h-14 text-center text-2xl font-bold border-2 border-gray-300 rounded-lg focus:border-[#ff9900] focus:ring-2 focus:ring-orange-200 outline-none transition-all"
              required
            />
            <input
             /* key={index}*/
             
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
             
            
              className="w-14 h-14 text-center text-2xl font-bold border-2 border-gray-300 rounded-lg focus:border-[#ff9900] focus:ring-2 focus:ring-orange-200 outline-none transition-all"
              required
            />
            <input
             /* key={index}*/
             
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
             
            
              className="w-14 h-14 text-center text-2xl font-bold border-2 border-gray-300 rounded-lg focus:border-[#ff9900] focus:ring-2 focus:ring-orange-200 outline-none transition-all"
              required
            />
         
        </div>

        <button 
          type="submit"
          className="w-full bg-[#ff9900] hover:bg-[#f2cb00] text-white py-3 rounded-lg font-semibold transition-colors"
        >
          Verify OTP
        </button>
      </form>

      <div className="text-center mt-6">
        <p className="text-gray-600">
          Didn't receive the code?{' '}
          <button className="text-[#ff9900] hover:text-[#f2cb00] font-medium">
            Resend
          </button>
        </p>
      </div>
    </div>
  </div>
  )
}

export default page
