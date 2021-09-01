import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import Login from "./components/login";


function App() {
  return (
    <div className='todo-app'>
      <Login data="something" newData = "new something"></Login>   
   </div>
  );
}

export default App;
