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
          {
            title: "Header",
            formItems: [
              {title: "Company Logo", component: "FileUploader"},
              {title: "Background Color", component: "Colorpicker"},
              {title: "Border", component: "Colorpicker"}
            ],
          },
          {
            title: "Image",
            formItems: [{title: "Image", component: "FileUploader"}],
          },
          {
            title: "Content",
            formItems: [{title: "Content Block", component: "TextField"}],
          },
          {
            title: "CTA",
            formItems: [{title: "Button", component: "TextField"}],
          },
          {
            title: "Footer",
            formItems: [
              {title: "Company Name", component: "TextField"},
              {title: "Address", component: "TextField"},
            ],
          }
        ]}
      />
      <PreviewContainer />
    </div>
  );
}

export default App;
