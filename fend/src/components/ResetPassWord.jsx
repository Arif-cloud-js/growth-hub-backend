// ResetPassword.js

import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ResetPassWord = () => {
  const { token } = useParams();
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleResetPassword = async () => {
    try {
      const response = await axios.post('/reset-password', { token, newPassword });
      setMessage(response.data.message);
      setError('');
    } catch (error) {
      setMessage('');
      setError(error.response.data.error);
    }
  };

  return (
    <div>
      <h2>Password Reset</h2>
      <p>Enter your new password:</p>
      <input
        type="password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <button onClick={handleResetPassword}>Reset Password</button>

      {message && <p style={{ color: 'green' }}>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default ResetPassWord;
