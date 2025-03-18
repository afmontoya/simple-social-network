Simple Social Network
A lightweight social networking application built with the MERN stack (MongoDB, Express, React, Node.js).

![Alt text](https://github.com/afmontoya/simple-social-network/blob/main/simple-social-network-2025.png)

Features

User Authentication: Secure registration and login system
Post Creation: Share your thoughts with text posts
Social Interactions: Like posts and see other users' content
User Profiles: View profiles and follow other users
Responsive Design: Modern UI that works across devices

Technology Stack
Frontend

React: UI library for building the user interface
React Router: For client-side routing
Context API: For state management
JavaScript: ES6+ features

Backend

Node.js: JavaScript runtime
Express: Web framework for Node.js
MongoDB: NoSQL database for data storage
JWT: JSON Web Tokens for authentication

Setup Instructions
Prerequisites

Node.js (v14 or higher)
npm (v6 or higher)
MongoDB database (local or Atlas)

Installation and Running Locally

Clone the repository
git clone https://github.com/afmontoya/simple-social-network.git
cd simple-social-network
Set up the backend
cd backend
npm install
Create a .env file in the backend directory with:
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
Set up the frontend
cd ../frontend
npm install
Run the application
In the backend directory:
npm run dev
In the frontend directory:
npm run dev
Access the application

Frontend: http://localhost:5173
Backend API: http://localhost:5000



Deployment
The application is deployed using Vercel for the frontend. You can access the live version at:
https://simple-social-network-afmontoya.vercel.app/

Project Structure
```
simple-social-network/
├── frontend/                # React frontend
│   ├── public/              # Static files
│   ├── src/                 # Source files
│   │   ├── components/      # React components
│   │   ├── context/         # Context API files
│   │   ├── App.jsx          # Main app component
│   │   └── main.jsx         # Entry point
│   ├── package.json         # Frontend dependencies
│   └── vite.config.js       # Vite configuration
├── backend/                 # Node.js backend
│   ├── models/              # Mongoose models
│   ├── routes/              # API routes
│   ├── middleware/          # Custom middleware
│   ├── server.js            # Express server
│   └── package.json         # Backend dependencies
└── vercel.json              # Vercel deployment configuration
```

Future Improvements

Add comment functionality
Support image uploads for posts and profiles
Add real-time notifications using WebSockets
Implement direct messaging between users
Add post search functionality

Contributing
Contributions are welcome! Please feel free to submit a Pull Request.
License
This project is licensed under the MIT License - see the LICENSE file for details.
Acknowledgments

This project was built as a learning exercise for the MERN stack
Inspired by common social networking features from platforms like Twitter and Facebook
