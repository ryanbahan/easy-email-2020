import React from 'react';
import './App.css';
import { Builder } from '../Builder/Builder';
import { Preview } from '../Preview/Preview';
import ColorPicker from '../Colorpicker/ColorPicker';

function App() {
  return (
    <div className="App">
      <Builder />
      <Preview />
    </div>
  );
}

export default App;
