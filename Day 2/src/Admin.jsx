import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput } from 'mdb-react-ui-kit';

function Admin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim() !== 'mna@gmail.com' || password.trim() !== '12345678') {
      alert('Invalid email or password');
      return;
    }

    navigate('/Dash');
    
    // Reset email and password fields
    setEmail('');
    setPassword('');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row', marginTop: '10px' }}>
      <MDBContainer fluid className='p-4'>
        <MDBRow>
          <MDBCol md='10' className='mt-5'>
            <MDBCard className='my-4'>
              <MDBCardBody className='p-5'>
                <h1>Admin Login</h1>
                <form onSubmit={handleSubmit}>
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
                  <button className="btn btn-primary mb-4 px-5" type="submit">Login</button>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div>
        <img src='https://img.freepik.com/free-vector/female-doing-yoga-meditation-mandala-background_1017-38763.jpg?size=626&ext=jpg&ga=GA1.1.329411951.1706526035&semt=sph' alt="illustration" />
      </div>
    </div>
  );
}

export default Admin;
