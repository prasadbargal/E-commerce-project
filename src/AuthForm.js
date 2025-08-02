import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const AuthForm = () => {
  const [activeTab, setActiveTab] = useState('login');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-700 via-pink-700 to-red-700 p-4">
      <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-xl shadow-lg max-w-md w-full p-6">
        <div className="flex justify-center mb-6 space-x-4">
          <button
            onMouseEnter={() => setActiveTab('login')}
            className={`px-6 py-2 rounded-full font-semibold transition-colors duration-300 ${
              activeTab === 'login'
                ? 'bg-white bg-opacity-40 text-gray-900 shadow-lg'
                : 'text-white hover:bg-white hover:bg-opacity-20'
            }`}
          >
            Login
          </button>
          <button
            onMouseEnter={() => setActiveTab('signup')}
            className={`px-6 py-2 rounded-full font-semibold transition-colors duration-300 ${
              activeTab === 'signup'
                ? 'bg-white bg-opacity-40 text-gray-900 shadow-lg'
                : 'text-white hover:bg-white hover:bg-opacity-20'
            }`}
          >
            Signup
          </button>
        </div>
        <div className="relative min-h-[360px]">
          <div
            className={`absolute inset-0 transition-opacity duration-500 ${
              activeTab === 'login' ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none z-0'
            }`}
          >
            <LoginForm />
          </div>
          <div
            className={`absolute inset-0 transition-opacity duration-500 ${
              activeTab === 'signup' ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none z-0'
            }`}
          >
            <SignupForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
