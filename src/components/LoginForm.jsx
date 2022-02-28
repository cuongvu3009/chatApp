import React, { useState } from 'react';
import './loginForm.css';
import axios from 'axios';
import { VscThreeBars } from 'react-icons/vsc';

const projectID = '56fab841-563e-499a-b955-866e008743de';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isHover, setIsHover] = useState(false);
  const [notes, setNotes] = useState([
    { username: 'test1', password: 'test1' },
    { username: 'test2', password: 'test2' },
    { username: 'test3', password: 'test3' },
    { username: 'test4', password: 'test4' },
  ]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObj = {
      'Project-ID': projectID,
      'User-Name': username,
      'User-Secret': password,
    };

    try {
      await axios.get('https://api.chatengine.io/chats', { headers: authObj });
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      window.location.reload();
      setError('');
    } catch (error) {
      setError('Oops, incorrect credentials.');
    }
  };

  return (
    <div className='login-container'>
      <button
        className='note-bar'
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <VscThreeBars size={30} />
      </button>
      {isHover ? (
        <div>
          <h2>Demo accounts</h2>
          {notes.map((note) => (
            <div className='note-container'>
              <p>username: {note.username}</p>
              <p>password: {note.password}</p>
            </div>
          ))}
        </div>
      ) : null}

      <form className='login-form' onSubmit={handleSubmit}>
        <h1 className='login-title'>Chat Application</h1>
        <input
          type='text'
          placeholder='username'
          className='login-input'
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type='password'
          placeholder='password'
          className='login-input'
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit' className='login-btn'>
          Start chatting
        </button>
        <h1>{error}</h1>
      </form>
    </div>
  );
};

export default LoginForm;
