import React, {useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";

const Login = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault(); // prevent page refresh
    setError("");

    if(!email || !password){
      setError("Please fill in all fields.");
      return;
    }

    try{
      // send data to the backend server through fetch API
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        },
      );

      const data = await response.json();

      if(response.ok){
        auth?.login(data.token, { _id: data._id, name: data.username, email: data.email });
        navigate('/');
        setEmail("");
        setPassword("");
      } else{
        setError(data.message || "Login failed.");

      }
    }catch(err){
      setError("An error occurred while logging in. Please try again.");
    }
  }

  return (
    <>
      {/* මුළු පිටුවම ආවරණය වෙන ප්‍රධාන ඩිව් එක */}
      <div className="min-h-[80vh] flex items-center justify-center">
        
        {/* මැද තියෙන Login Card එක */}
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-md border border-gray-700">
          <h2 className="text-3xl font-bold text-center text-white mb-6">
            Welcome Back
          </h2>

          {error && <div className="bg-red-500 text-white p-3 rounded mb-4 text-sm text-center">{error}</div>}
          
          {/* ෆෝම් එක මෙතනින් පටන් ගන්නේ */}
          <form onSubmit={handleLogin} className="flex flex-col gap-5">
            
            {/* Email එක ගහන තැන */}
            <div>
              <label className="block text-gray-400 text-sm mb-2">
                Email Address
              </label>

              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
              <Link to="/register" className="text-blue-500 hover:text-blue-400">Sign up</Link>
            </span>
          </p>
        </div>

      </div>
    </>
  )
}

export default Login