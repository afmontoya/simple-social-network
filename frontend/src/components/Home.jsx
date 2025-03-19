import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const { user } = useAuth();

  return (
    <div className="max-w-4xl mx-auto">
      {user ? (
        <div className="bg-white rounded-lg shadow p-6">
          <h1 className="text-2xl font-bold mb-4">Welcome back, {user.username}!</h1>
          <p className="text-gray-600 mb-4">
            This is your personal feed where you'll see posts from people you follow.
          </p>
          <Link
            to="/profile"
            className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            View Your Profile
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <h1 className="text-2xl font-bold mb-4">Welcome to Simple Social</h1>
          <p className="text-gray-600 mb-6">
            Join our community and connect with others!
          </p>
          <div className="space-x-4">
            <Link
              to="/register"
              className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Register
            </Link>
            <Link
              to="/login"
              className="inline-block bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home; 