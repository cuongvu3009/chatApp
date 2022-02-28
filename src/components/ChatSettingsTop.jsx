import React from 'react';
import './chatSettingsTop.css';

const ChatSettingsTop = () => {
  const handleLogout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    document.location.reload(true);
  };

  return (
    <div className='setting-container'>
      <button className='setting-btn' onClick={handleLogout}>
        Log out
      </button>
    </div>
  );
};

export default ChatSettingsTop;
