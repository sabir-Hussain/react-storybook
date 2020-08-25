import React from 'react';
import Button from './Buttons/Button'
import './App.css';

function App() {
  return (
    <div className="App">
    <Button label='xiq button' color='warning' size='large' type='filled'/>
    <Button label='xiq button' color='danger' size='large' type='outline'/>
    </div>
  );
}

export default App;
