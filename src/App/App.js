import React from 'react';
import './App.css';
import { Builder } from '../Builder/Builder';
import { PreviewContainer } from '../PreviewContainer/PreviewContainer';
import ColorPicker from '../Colorpicker/ColorPicker';

function App() {
  return (
    <div className="App">
      <Builder
        menus={[
          {title: "Header", formItems: ["Company Logo", "Background Color", "Border"]},
          {title: "Image", formItems: ["Image"]},
          {title: "Content", formItems: ["Content Block"]},
          {title: "CTA", formItems: ["Button"]},
          {title: "Footer", formItems: ["Company Name", "Address"]}
        ]}
      />
      <PreviewContainer />
    </div>
  );
}

export default App;
