import React from 'react';
import './App.css';
import { Builder } from '../FormComponents/Builder/Builder';
import { PreviewContainer } from '../EmailComponents/PreviewContainer/PreviewContainer';

function App() {
  return (
      <div className="App">
        <Builder
          menus={[
            {
              title: "Header",
              formItems: [
                {title: "Company Logo", component: "FileUploader", store: "companyImage"},
                {title: "Company Name", component: "TextField", store: "companyName"},
                {title: "Background Color", component: "Colorpicker", store: "bgColor"},
                {title: "Border", component: "Colorpicker", store: "borderColor"}
              ],
            },
            {
              title: "Image",
              formItems: [
                {title: "Image", component: "FileUploader", store: "mainImage"},
                {title: "Tagline", component: "TextField", store: "mainImageTagline"},
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
                {title: "Company Name", component: "TextField", store: "footerName"},
                {title: "Company Address", component: "TextField", store: "footerAddress"},
              ],
            }
          ]}
        />
        <PreviewContainer />
      </div>
  );
}

export default App;
