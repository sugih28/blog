import React from 'react';
import Navbar from './components/layout/Navbar'
import {HashRouter, Route} from 'react-router-dom'

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Navbar />
        <h2>Hai</h2>
      </div>
    </HashRouter>
  );
}

export default App;
