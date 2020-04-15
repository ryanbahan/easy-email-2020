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
              title: "Main Image",
              formItems: [
                {title: "Image", component: "FileUploader", store: "mainImage"},
              ],
            },
            {
              title: "Image Tagline",
              formItems: [
                {title: "Tagline Text", component: "TextField", store: "mainImageTagline"},
                {title: "Background Color", component: "Colorpicker", store: "mainImageTaglineBG"},
                {title: "Font Color", component: "Colorpicker", store: "mainImageFontColor"},
                {title: null},
                {title: "Button Text", component: "TextField", store: "mainImageButtonCopy"},
                {title: "Button Color", component: "Colorpicker", store: "mainImageButtonColor"},
                {title: "Button Font Color", component: "Colorpicker", store: "mainImageButtonFontColor"},
              ],
            },
            {
              title: "Main Content",
              formItems: [
                {title: "Content Block Text", component: "TextField", store: "content"},
                {title: "Button Text", component: "TextField", store: "cta"},
                {title: "Button Color", component: "Colorpicker", store: "ctaButtonColor"},
                {title: "Button Font Color", component: "Colorpicker", store: "ctaButtonFontColor"}
              ],
            },
            {
              title: "Footer",
              formItems: [
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
