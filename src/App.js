import './App.css';
import Output from './output'
import React, { useEffect } from 'react'


function App() {
       
  useEffect(() => {
    document.title = "Calculator"
 }, []);
  return (
    <div className="App">
      <Output/>
      </div>
  );
}

export default App;
