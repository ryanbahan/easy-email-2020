export const DefaultTemplate = [{
  title: "Header",
  formItems: [
    {
      title: "Company Logo",
      component: "FileUploader",
      store: "companyImage",
      checkbox: true
    },
    {
      title: "Company Name",
      component: "ButtonCopyField",
      store: "companyName",
      checkbox: true
    },
    {
      title: "Font Color",
      component: "Colorpicker",
      store: "companyFontColor",
      checkbox: false
    },
    {
      title: "Background Color",
      component: "Colorpicker",
      store: "headerBGColor",
      checkbox: false
    },
  ],
},
{
  title: "Main Image",
  formItems: [
    {
      title: "Image",
      component: "FileUploader",
      store: "mainImage",
      checkbox: false
    },
  ],
},
{
  title: "Image Banner",
  formItems: [
    {
      title: "Banner Text",
      component: "TextField",
      constraints: {maxLength: 65},
      store: "mainImageTagline",
      checkbox: true
    },
    {
      title: "Background Color",
      component: "Colorpicker",
      store: "mainImageTaglineBG",
      checkbox: false
    },
    {
      title: "Font Color",
      component: "Colorpicker",
      store: "mainImageFontColor",
      checkbox: false
    },
    {
      title: null
    },
    {
      title: "Banner Button Text",
      component: "ButtonCopyField",
      constraints: {maxLength: 40},
      store: "mainImageButtonCopy",
      checkbox: true
    },
    {
      title: "Button Color",
      component: "Colorpicker",
      store: "mainImageButtonColor",
      checkbox: false
    },
    {
      title: "Button Font Color",
      component: "Colorpicker",
      store: "mainImageButtonFontColor",
      checkbox: false
    },
  ],
},
{
  title: "Main Content",
  formItems: [
    {
      title: "Content Block Text",
      component: "TextField",
      constraints: {maxLength: 1000},
      store: "content",
      checkbox: true
    },
    {
      title: "CTA Button Text",
      component: "ButtonCopyField",
      store: "cta",
      checkbox: true
    },
    {
      title: "Button Color",
      component: "Colorpicker",
      store: "ctaButtonColor",
      checkbox: false
    },
    {
      title: "Button Font Color",
      component: "Colorpicker",
      store: "ctaButtonFontColor",
      checkbox: false
    }
  ],
},
{
  title: "Footer",
  formItems: [
    {
      title: "Company Address",
      component: "TextField",
      constraints: {maxLength: 250},
      store: "footerAddress"
    },
    {
      title: "Font Color",
      component: "Colorpicker",
      store: "footerFontColor"
    },
    {
      title: "Background Color",
      component: "Colorpicker",
      store: "footerBGColor"
    },
  ],
}]
