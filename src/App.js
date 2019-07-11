import React from 'react';
import './App.css';
import MainChat from './components/views/MainChat'
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
