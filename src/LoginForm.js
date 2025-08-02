import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!email) newErrors.email = 'Email is required';
    if (!password) newErrors.password = 'Password is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Stub: handle login submission
      alert('Login submitted');
    }
  };

  return (
    <div className="bg-white bg-opacity-30 backdrop-blur-md shadow-lg rounded-xl p-6 w-full max-w-md mx-auto">
      <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-900 drop-shadow-md">Login</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-5 relative">
          <label htmlFor="loginEmail" className="block text-gray-800 font-semibold mb-2 flex items-center space-x-2">
            <span className="text-xl">👤</span>
            <span>Email</span>
          </label>
          <input
            id="loginEmail"
            type="email"
            placeholder="Enter your email"
            className={`w-full px-4 py-3 rounded-lg bg-white bg-opacity-70 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-pink-500 focus:bg-opacity-90 transition duration-300 ${
              errors.email ? 'border-2 border-red-500' : 'border border-gray-300'
            }`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
        </div>
        <div className="mb-5 relative">
          <label htmlFor="loginPassword" className="block text-gray-800 font-semibold mb-2 flex items-center space-x-2">
            <span className="text-xl">🔒</span>
            <span>Password</span>
          </label>
          <div className="relative">
            <input
              id="loginPassword"
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              className={`w-full px-4 py-3 rounded-lg bg-white bg-opacity-70 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-pink-500 focus:bg-opacity-90 transition duration-300 ${
                errors.password ? 'border-2 border-red-500' : 'border border-gray-300'
              }`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-600 hover:text-pink-600 transition"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? '🙈' : '👁️'}
            </button>
          </div>
          {errors.password && <p className="text-red-600 text-sm mt-1">{errors.password}</p>}
        </div>
        <div className="flex items-center justify-between mb-6">
          <label className="inline-flex items-center text-gray-800">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
              className="form-checkbox h-5 w-5 text-pink-600"
            />
            <span className="ml-2 select-none">Remember Me</span>
          </label>
          <a href="#" className="text-pink-600 hover:underline text-sm font-semibold">
            Forgot Password?
          </a>
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white py-3 rounded-lg font-bold shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
