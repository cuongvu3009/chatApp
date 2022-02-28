import React from 'react';
import './App.css';
import { ChatEngine } from 'react-chat-engine';
import LoginForm from './components/LoginForm';
import ChatSettingsTop from './components/ChatSettingsTop';

function App() {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <>
      <ChatEngine
        height='100vh'
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        projectID='56fab841-563e-499a-b955-866e008743de'
        renderChatSettingsTop={(creds, chat) => <ChatSettingsTop />}
      />
    </>
  );
}

export default App;
