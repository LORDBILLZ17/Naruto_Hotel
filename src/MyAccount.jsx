// src/components/MyAccount.jsx
import React from 'react';
import useAuth from './useAuth';

const MyAccount = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Please <a href="/Login" className='text-orange-500'>login</a> or <a href="/Signup" className='text-orange-500'>Signup</a> to view your account details.</p>
        
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h2 className="text-3xl font-bold mb-4">My Account</h2>
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
        <p className="mb-2"><strong>User ID:</strong> {user.id}</p>
        {user.name && <p className="mb-2"><strong>Name:</strong> {user.name}</p>}
        <p className="mb-2"><strong>Email:</strong> {user.email}</p>
       
        <p className="mb-2"><strong>Password:</strong> {user.password}</p>
      </div>
    </div>
  );
};

export default MyAccount;
