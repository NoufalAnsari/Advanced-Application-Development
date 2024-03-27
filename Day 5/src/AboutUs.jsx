// AboutUs.js

import React from 'react';
import Nav from './Nav';
const footerStyle = {
    backgroundColor: 'grey',
    color: '#fff',
    padding: '2rem 0',
    textAlign: 'center',
  };

const AboutUs = () => {
  const containerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '20px',
  };

  const contentStyle = {
    marginBottom: '30px',
  };

  const teamStyle = {
    textAlign: 'center',
  };

  const teamMemberStyle = {
    marginTop: '20px',
  };

  const memberImageStyle = {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    objectFit: 'cover',
  };

  const memberNameStyle = {
    margin: '10px 0 5px',
  };

  const memberRoleStyle = {
    color: '#888',
  };

  return (
    <div>
        <Nav/>
    <div style={containerStyle}>
      <header style={headerStyle}>
        <h1>About Us</h1>
      </header>
      <section style={contentStyle}>
        <p>
        SoulYoga Connect is your virtual sanctuary for holistic well-being, offering a transformative journey through the practice of yoga.
        </p>
        <p>
        Our platform is designed to nurture your mind, body, and spirit, providing you with access to expert guidance, soulful teachings, and a supportive community from the comfort of your home. 
        </p>
        <p>
        With SoulYoga Connect, embark on a path of self-discovery, find inner peace, and cultivate a deeper connection to your true self. Whether you're a seasoned yogi or just beginning your journey, SoulYoga Connect welcomes you to explore the infinite possibilities of yoga and embark on a journey of personal growth and spiritual awakening.
        </p>
      </section>
      <section style={teamStyle}>
        <h2>Meet Our Team</h2>
        <div style={teamMemberStyle}>
          <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Team Member 1" style={memberImageStyle} />
          <h3 style={memberNameStyle}>John Doe</h3>
          <p style={memberRoleStyle}>Co-founder & CEO</p>
        </div>
        <div style={teamMemberStyle}>
          <img src="https://images.unsplash.com/photo-1562788869-4ed32648eb72?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Team Member 2" style={memberImageStyle} />
          <h3 style={memberNameStyle}>Jane Smith</h3>
          <p style={memberRoleStyle}>Co-founder & CTO</p>
        </div>
        {/* Add more team members as needed */}
      </section>
    </div>
    <footer style={footerStyle}>
      <div className="footer-container">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>Soul Yoga is dedicated to providing innovative solutions.</p>
        </div>
        <div className="footer-section">
      
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: soulyoga@example.com</p>
          <p>Phone: (+91) 9081308803</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
    </div>
  );
};

export default AboutUs;
