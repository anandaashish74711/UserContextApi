import React, { useState, useContext } from 'react';
import UserContext from '../context/Usercontext';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
const {setUser}=useContext(UserContext)
  const handleSubmit = (e) => {
    // Add your login logic here
    e.preventDefault()
    setUser({username,password})
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder='username'
      />
      <input
        type='password' // Use type='password' for password input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='password'
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
