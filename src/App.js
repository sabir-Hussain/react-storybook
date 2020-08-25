import React from 'react';
import FilledButton from './Buttons/Filled button/FilledBtn'
import OutlineButton from './Buttons/Outline button/OutlineBtn'
import './App.css';

function App() {
  return (
    <div className="App">
     <FilledButton label='xiq button' type='warning' size='large'/>
     <OutlineButton label='xiq button' type='danger' size='large'/>
    </div>
  );
}

export default App;
