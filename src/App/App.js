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
                {title: "Company Logo", component: "FileUploader", store: "companyImage"},
                {title: "Company Name", component: "TextField", store: "companyName"},
                {title: "Background Color", component: "Colorpicker", store: "backgroundColor"},
                {title: "Border", component: "Colorpicker", store: "borderBackgroundColor"}
              ],
            },
            {
              title: "Image",
              formItems: [
                {title: "Image", component: "FileUploader"},
                {title: "Image CTA", component: "TextField", store: "mainImageButtonCopy"}
              ],
            },
            {
              title: "Content",
              formItems: [{title: "Content Block", component: "TextField", store: "content"}],
            },
            {
              title: "CTA",
              formItems: [{title: "Button", component: "TextField", store: "cta"}],
            },
            {
              title: "Footer",
              formItems: [
                {title: "Company Name", component: "TextField", store: "footerAddress"},
                {title: "Address", component: "TextField", store: "footerAddress"},
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
