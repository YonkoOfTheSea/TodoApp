import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import Login from "./components/login";
import Signup from './components/signup';
import Nav from "./Nav"


function App() {
  return (
<Router>
      <div className="App">
      <Nav />
        <Switch>
          {currentUser ? (
            <>
              <Route path="/" component={TodoList} exact></Route>
              <Redirect to="/"></Redirect>
            </>
          ) : (
            <>
              <Route path="/login" component={Login} exact></Route>
              <Route path="/signup" component={Signup} exact></Route>
              <Redirect to="/login"></Redirect>
            </>
          )}
          </Switch>
      </div>
    </Router>
  );
}

export default App;
