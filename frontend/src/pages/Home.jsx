import React from 'react';

const Home = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">Welcome to Social Network</h2>
              <p className="card-text">
                This is your home feed. Start connecting with others and sharing your thoughts!
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Trending Topics</h3>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">#Technology</li>
                <li className="list-group-item">#Programming</li>
                <li className="list-group-item">#WebDevelopment</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 