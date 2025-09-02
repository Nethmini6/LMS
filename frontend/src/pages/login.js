import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loginImage from '../assets/new2.jpg';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000', {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      
      console.log('Status:', response.status);
      console.log('Raw data:', data);

      if (response.ok) {
        alert(data.message || "Login succesfull");
        navigate('/home');
      } else {
        alert(data.message || "Login failed");
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Something went wrong. Please try again.');
    }
  };

    // Basic validation (you can add more)
    /*if (email === 'admin@gmail.com' && password === 'admin123') {
      alert('Login successful!');
      navigate('/home');
      //direct to home 
    } else {
      alert('Invalid email or password');
    }
  };*/

  return (
  <div className='login-wrapper'>
    <div className='login-image'>
      <img src={loginImage} alt="Login Illustration"></img>
    </div>

    <div className="login-form">
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <div className="form-group">
          <label>Email:</label>
          <input 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
    </div>
  );
}

export default Login;
