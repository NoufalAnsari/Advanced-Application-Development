import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput } from 'mdb-react-ui-kit';
import './assets/css/login.css';

function Login() {
  const [fname, setFname] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (fname.trim() === '' || password.trim().length < 6) {
      alert('First Name is required and Password must be at least 6 characters long');
      return;
    }

    // Save user details to session storage
    sessionStorage.setItem('user', JSON.stringify({ fname, password }));

    // All validations passed, navigate to Home
    navigate('/Home');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <MDBContainer fluid className='p-4'>
        <MDBRow>
          <MDBCol md='5'>
            <MDBCard className='my-4'>
              <MDBCardBody className='p-5'>
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                  <MDBInput
                    wrapperClass='mb-4'
                    label='User Name'
                    id='f_name'
                    type='text'
                    size='lg'
                    required
                    value={fname}
                    onChange={(e) => setFname(e.target.value)}
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

                  <button className="btn btn-primary mb-4 px-5" type="submit">Login</button>
                </form>
                <Link to='/Admin'>Admin Login</Link>
                <p>Not a member?<Link to='/reg'> Register</Link></p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div>
        <img src='https://t3.ftcdn.net/jpg/03/28/22/24/240_F_328222411_lCeEca3Xc9HxddKLCJzlqRGsOSz25swg.jpg' alt="illustration" />
      </div>
    </div>
  );
}

export default Login;
