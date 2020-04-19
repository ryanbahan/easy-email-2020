import React from 'react';
import Dropdown from './Dropdown';
import { render } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../../reducers';
import '@testing-library/jest-dom/extend-expect';
import { DefaultTemplate } from '../../Templates/DefaultTemplate';
import { BrowserRouter as Router, Link } from 'react-router-dom';

describe("Dropdown", () => {
  const store = createStore(rootReducer);
  let utils;

  beforeEach(() => {
    utils = render(
      <Provider store={store}>
        <Router>
          <Dropdown
            formItems={[
              {title: "Company Logo", component: "FileUploader", store: "companyImage"},
              {title: "Company Name", component: "TextField", store: "companyName"},
              {title: "Font Color", component: "Colorpicker", store: "companyFontColor"},
              {title: "Background Color", component: "Colorpicker", store: "headerBGColor"},
            ]}
          />
        </Router>
      </Provider>
    );
  })

  it("should render the correct menu items", () => {
    const { getByText, getAllByText } = utils;

    const companyLogoLabel = getByText("Company Logo");
    const fileUploader = getByText("Upload file");
    const companyNameLabel = getByText("Company Name");
    const textField = getByText("Edit");
    const submitBtn = getByText("Submit");
    const fontColorLabel = getByText("Font Color");
    const colorPicker = getAllByText("Pick Color");
    const bgColorLabel = getByText("Background Color");

    expect(companyLogoLabel).toBeInTheDocument();
    expect(fileUploader).toBeInTheDocument();
    expect(companyNameLabel).toBeInTheDocument();
    expect(textField).toBeInTheDocument();
    expect(submitBtn).toBeInTheDocument();
    expect(fontColorLabel).toBeInTheDocument();
    expect(colorPicker.length).toEqual(2);
    expect(bgColorLabel).toBeInTheDocument();
  })
});
