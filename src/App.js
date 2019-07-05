import React from 'react';
import './App.css';
import MainChat from './components/views/MainChat'
import Bubble from './components/template/Bubble'
import { ChatFeed, Message } from 'react-chat-ui'
import { Provider } from 'unstated'

function App() {
  return (
    <div className="App">
      <Provider>
        <MainChat/>
      </Provider>
    </div>
  );
}

export default App;
