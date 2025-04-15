
import React, { useState } from 'react';
import useAuth from './useAuth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { setUser } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Generate a random 4-digit user id
    const randomId = Math.floor(1000 + Math.random() * 9000);
    // Set the user data in context
    setUser({ id: randomId, email: form.email, password: form.password });
    // Redirect to the My Account page
    navigate('/myaccount');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full mb-6 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
        />
        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 font-semibold transition"
        >
          Login
        </button>
        <p className="mt-4 text-center text-sm">
          Don't have an account? <a href="/signup" className="text-orange-500 font-semibold">Sign up</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
