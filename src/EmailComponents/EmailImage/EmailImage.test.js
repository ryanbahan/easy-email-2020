import React from 'react';
import EmailImage from './EmailImage';
import { render } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../../reducers';
import '@testing-library/jest-dom/extend-expect';
import { DefaultState } from '../../Templates/DefaultState';

describe("EmailImage", () => {
  const store = createStore(rootReducer);
  let utils;

  beforeEach(() => {
    utils = render(<Provider store={store}><EmailImage /></Provider>);
  })

  it("should render the correct content", () => {
    const { getByAltText } = utils;

    const image = getByAltText('Main content');

    expect(image).toBeInTheDocument();
    expect(image.src).toEqual(DefaultState.mainImage);
  })
});
