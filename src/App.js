import React from 'react'
import Navbar from './components/layout/Navbar'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/page/Home'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
