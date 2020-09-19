import React from 'react';
import './App.css';
import Jumbotron from './components/jumbotron';
import Wrapper from './components/wrapper';
import Directory from './pages/directory.js';

function App() {
  return (
    <div className="App">
       <Jumbotron />
       <Wrapper />
        <Directory />
      
    </div>
  );
}

export default App;
