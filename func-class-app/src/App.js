import React from 'react';
import FuncComp from './components/FuncComp';
import ClassComp from './components/ClassComp';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Hello World</h1>
      <FuncComp initNumber={2}></FuncComp>
      <ClassComp initNumber={2}></ClassComp>
    </div>
  );
}

export default App;
