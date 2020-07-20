import React from 'react';
import './App.css';
import router from './components/router/router.js';

function App() {
  return (
    <div className="App">
      {router()}
    </div>
  );
}

export default App;
