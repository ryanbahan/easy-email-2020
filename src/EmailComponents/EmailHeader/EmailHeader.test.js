import React from 'react';
import EmailHeader from './EmailHeader';
import { render } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../../reducers';
import '@testing-library/jest-dom/extend-expect';
import { DefaultState } from '../../Templates/DefaultState';

describe("EmailHeader", () => {
  const store = createStore(rootReducer);
  let utils;

  beforeEach(() => {
    utils = render(<Provider store={store}><EmailHeader /></Provider>);
  })

  it("should render the correct content", () => {
    const { getByText, getByAltText } = utils;

    const companyName = getByText(DefaultState.companyName);
    const companyLogo = getByAltText("Company logo");

    expect(companyName).toBeInTheDocument();
    expect(companyLogo).toBeInTheDocument();
    expect(companyLogo.src).toEqual(DefaultState.companyImage);
  })
});
