import React, { useState } from 'react';
import './App.css';
import Display from './components/Display';
import NumberPad from './components/NumberPad';

function App() {
  document.querySelector('body').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      Update("=");
    }
});
  const [val,setVal]=useState(null);
  const [upd,setUpd]=useState(false)
  function Update(num)
  {
    setVal(num)
    setUpd(!upd)
  }
  return (
    <React.StrictMode>
    <div className="App">
      <Display val={val} upd={upd}/>
      <NumberPad update={Update}/>
    </div>
    </React.StrictMode>
  );
}

export default App;
