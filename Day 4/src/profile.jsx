import React, { useState, useEffect } from 'react';
import './profile.css'; 
import Nav from './Nav';

const Profile = () => {
  const [user, setUser] = useState({
    fname: '',
    password: '',
  });

  const [isEditing, setEditing] = useState(false);

  useEffect(() => {
    // Retrieve user details from session storage
    const storedUser = sessionStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    setEditing(false);
    // Perform save logic, e.g., send updated user data to the server
  };

  const handleInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <Nav />
      <div className="user-profile-container">
        <h1 className="user-profile-heading">User Profile</h1>
        {isEditing ? (
          <div>
            <label className="user-profile-label" htmlFor="name">Name:</label>
            <input
              className="user-profile-input"
              type="text"
              id="name"
              name="name"
              value={user.fname}
              onChange={handleInputChange}
            />
            <br />
            <label className="user-profile-label" htmlFor="password">Password:</label>
            <input
              className="user-profile-input"
              type="password"
              id="password"
              name="password"
              value={user.password}
              onChange={handleInputChange}
            />
            
            <button className="user-profile-button" onClick={handleSaveClick}>Save</button>
          </div>
        ) : (
          <div>
            <p className="user-profile-paragraph">
              <strong className="user-profile-strong">Name:</strong> {user.fname}
            </p>
            <p className="user-profile-paragraph">
              <strong className="user-profile-strong">Password:</strong> {user.password}
            </p>
            <p className="user-profile-paragraph">
              <strong className="user-profile-strong">Bio:</strong> User
            </p>
            <button className="user-profile-button" onClick={handleEditClick}>Edit</button>
          </div>

          
        )}
      </div>
      
    </div>
  );
};

export default Profile;
