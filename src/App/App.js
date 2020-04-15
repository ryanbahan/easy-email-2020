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
                {title: "Font Color", component: "Colorpicker", store: "companyFontColor"},
                {title: "Background Color", component: "Colorpicker", store: "headerBGColor"},
              ],
            },
            {
              title: "Image",
              formItems: [
                {title: "Image", component: "FileUploader", store: "mainImage"},
                {title: "Tagline", component: "TextField", store: "mainImageTagline"},
                {title: "Button Text", component: "TextField", store: "mainImageButtonCopy"},
                {title: "Button Color", component: "Colorpicker", store: "mainImageButtonColor"},
                {title: "Button Font Color", component: "Colorpicker", store: "mainImageButtonFontColor"}
              ],
            },
            {
              title: "Content",
              formItems: [{title: "Content Block", component: "TextField", store: "content"}],
            },
            {
              title: "CTA",
              formItems: [
                {title: "Button", component: "TextField", store: "cta"},
                {title: "Button Color", component: "Colorpicker", store: "ctaButtonColor"},
                {title: "Button Font Color", component: "Colorpicker", store: "ctaButtonFontColor"}
              ],
            },
            {
              title: "Footer",
              formItems: [
                {title: "Company Name", component: "TextField", store: "footerName"},
                {title: "Company Address", component: "TextField", store: "footerAddress"},
                {title: "Font Color", component: "Colorpicker", store: "footerFontColor"},
                {title: "Background Color", component: "Colorpicker", store: "footerBGColor"},
              ],
            }
          ]}
        />
        <PreviewContainer />
      </div>
  );
}

export default App;
