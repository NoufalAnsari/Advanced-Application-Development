import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput } from 'mdb-react-ui-kit';
import './Reg.css';

function Reg() {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (fname.trim() === '') {
      alert('First Name is required');
      return;
    }

    if (lname.trim() === '') {
      alert('Last Name is required');
      return;
    }

    if (email.trim() === '') {
      alert('Email is required');
      return;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      alert('Please enter a valid email address');
      return;
    }

    if (password.trim().length < 6) {
      alert('Password must be at least 6 characters long');
      return;
    }

    navigate('/');
  };

  return (
    <MDBContainer fluid className='p-4'>
      <MDBRow>
        <MDBCol md='6'>
          <MDBCard className='my-5'>
            <MDBCardBody className='p-5'>
              <h1>New User</h1>
              <form onSubmit={handleSubmit}>
                <MDBInput
                  wrapperClass='mb-4'
                  label='First Name'
                  id='f_name'
                  type='text'
                  size='lg'
                  required
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                />
                <MDBInput
                  wrapperClass='mb-4'
                  label='Last Name'
                  id='l_name'
                  type='text'
                  size='lg'
                  required
                  value={lname}
                  onChange={(e) => setLname(e.target.value)}
                />
                <MDBInput
                  wrapperClass='mb-4'
                  label='Email'
                  id='email'
                  type='email'
                  size='lg'
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <MDBInput
                  wrapperClass='mb-4'
                  label='Password'
                  id='password'
                  type='password'
                  size='lg'
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button className="btn btn-primary mb-4 px-5" type="submit">Register</button>
              </form>
              <img src='https://t4.ftcdn.net/jpg/00/43/39/79/240_F_43397950_r4W5MeDJT9O7RrWKu56Z7IBouX9HWotD.jpg' alt="illustration" />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Reg;
