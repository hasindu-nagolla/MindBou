import React from 'react'

const Login = () => {
  return (
    <>
      {/* මුළු පිටුවම ආවරණය වෙන ප්‍රධාන ඩිව් එක */}
      <div className="min-h-[80vh] flex items-center justify-center">
        
        {/* මැද තියෙන Login Card එක */}
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-md border border-gray-700">
          <h2 className="text-3xl font-bold text-center text-white mb-6">
            Welcome Back
          </h2>
          
          {/* ෆෝම් එක මෙතනින් පටන් ගන්නේ */}
          <form className="flex flex-col gap-5">
            
            {/* Email එක ගහන තැන */}
            <div>
              <label className="block text-gray-400 text-sm mb-2">
                Email Address
              </label>

              <input 
                type="email" 
                placeholder="you@example.com" 
                className="w-full bg-gray-900 text-white px-4 py-3 rounded-lg outline-none border border-gray-700 focus:border-blue-500 transition-colors"
              />
            </div>

            {/* Password එක ගහන තැන */}
            <div>
              <label className="block text-gray-400 text-sm mb-2">
                Password
              </label>

              <input 
                type="password" 
                placeholder="••••••••" 
                className="w-full bg-gray-900 text-white px-4 py-3 rounded-lg outline-none border border-gray-700 focus:border-blue-500 transition-colors"
              />
            </div>

            {/* Login බොත්තම */}
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg mt-2 transition-colors cursor-pointer">
              Sign In
            </button>

          </form>

          <p className="text-center text-gray-400 text-sm mt-6">
            Don't have an account?{" "}
            <span className="text-blue-500 hover:text-blue-400 cursor-pointer">
              Sign up
            </span>
          </p>
        </div>

      </div>
    </>
  )
}

export default Login