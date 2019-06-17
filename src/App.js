import React from 'react'
import Navbar from './components/layout/Navbar'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/page/Home'
import DetailPost from './components/post/DetailPost';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/post/:id" component={DetailPost} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
