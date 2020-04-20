import React from 'react';
import LoadingSpinner from './LoadingSpinner';
import { render } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../reducers';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router, Link } from 'react-router-dom';

describe("LoadingSpinner", () => {
  const store = createStore(rootReducer);
  let utils;

  beforeEach(() => {
    utils = render(
      <Provider store={store}>
        <Router>
          <LoadingSpinner />
        </Router>
      </Provider>
    );
  })

  it("should render the correct menu items", () => {
    const { getByRole } = utils;

    const spinner = getByRole('spinner');

    expect(spinner).toBeInTheDocument();
  })
});
