import React from 'react';
import TextField from './TextField';
import { render } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../../reducers';
import '@testing-library/jest-dom/extend-expect';

describe("TextField", () => {
  const store = createStore(rootReducer);
  let utils;

  beforeEach(() => {
    utils = render(
      <Provider store={store}>
        <TextField />
      </Provider>
    );
  })

  it("should render the correct menu items", () => {
    const { getByText, debug } = utils;

    debug();
  })
});
