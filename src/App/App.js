import React from 'react';
import './App.css';
import { Builder } from '../Builder/Builder';
import { PreviewContainer } from '../PreviewContainer/PreviewContainer';
import ColorPicker from '../Colorpicker/ColorPicker';

function App() {
  return (
    <div className="App">
      <Builder />
      <PreviewContainer />
    </div>
  );
}

export default App;
