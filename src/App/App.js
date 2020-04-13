import React from 'react';
import './App.css';
import { Builder } from '../FormComponents/Builder/Builder';
import { PreviewContainer } from '../EmailComponents/PreviewContainer/PreviewContainer';
import { MyContext, MyProvider } from '../Context';

function App() {
  return (
    <MyProvider>
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
              formItems: [
                {title: "Image", component: "FileUploader"},
                {title: "Image CTA", component: "TextField"}
              ],
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
    </MyProvider>
  );
}

export default App;
