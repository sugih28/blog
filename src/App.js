import React from 'react'
import Navbar from './components/layout/Navbar'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/page/Home'
import SignIn from './components/auth/SignIn'
import DetailPost from './components/post/DetailPost';
import CreatePost from './components/post/CreatePost';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/blog/" component={Home} />
          <Route exact path="/blog/signin" component={SignIn} />
          <Route path="/blog/post/create" component={CreatePost} />
          <Route path="/blog/post/:id" component={DetailPost} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
