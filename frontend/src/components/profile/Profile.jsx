import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center space-x-4 mb-6">
          <img
            src={user.profilePhoto || '/default-avatar.png'}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover"
          />
          <div>
            <h1 className="text-2xl font-bold">{user.username}</h1>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">About</h2>
          <p className="text-gray-600">{user.bio || 'No bio yet'}</p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Location</h2>
          <p className="text-gray-600">{user.location || 'No location set'}</p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Website</h2>
          <p className="text-gray-600">
            {user.website ? (
              <a href={user.website} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                {user.website}
              </a>
            ) : (
              'No website set'
            )}
          </p>
        </div>

        <Link
          to="/profile/edit"
          className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Edit Profile
        </Link>
      </div>
    </div>
  );
};

export default Profile;