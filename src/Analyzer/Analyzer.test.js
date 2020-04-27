import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Analyzer from './Analyzer';
import rootReducer from '../utils/reducers';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { DefaultState } from '../utils/Templates/DefaultState';

describe("Analyzer", () => {
  const store = createStore(rootReducer);
  window.fetch = jest.fn();
  let utils;

  beforeEach(() => {
    utils = render(
      <Provider store={store}>
        <Router>
          <Analyzer />
        </Router>
      </Provider>
    );
  })

  it("should render the correct menu items", () => {
    const { getByText, debug } = utils;

    const sentimentLabel = getByText("Content Sentiment");
    const taglineLabel = getByText("Tagline Sentiment");
    const ctaLabel = getByText("Call-to-action Sentiment");

    const content = getByText(DefaultState.content);
    const tagline = getByText(DefaultState.mainImageTagline);
    const taglineCTA = getByText(DefaultState.mainImageButtonCopy);
    const cta = getByText(DefaultState.cta);

    expect(sentimentLabel).toBeInTheDocument();
    expect(taglineLabel).toBeInTheDocument();
    expect(ctaLabel).toBeInTheDocument();
    expect(content).toBeInTheDocument();
    expect(tagline).toBeInTheDocument();
    expect(taglineCTA).toBeInTheDocument();
    expect(cta).toBeInTheDocument();
    expect(fetch).toHaveBeenCalled();
    expect(fetch).toHaveBeenCalledWith('https://easy-email.mybluemix.net/api/tone', {"body": "{\"toneInput\":{\"text\":\"Happy Easter! And happy birthday to us! 2 years ago, we launched the Darkglass Ultra plugin. Since then we've launched a further 7 plugins. We've got plenty more on our roadmap (s o o n), and we can't wait to show you the Quad Cortex later this year! We'd love to throw a big party, but since nobody can go outside, we're just going to discount all our plugins instead! Get 30% off all plugins until April 18th 00:00 EEST.\"}}", "headers": {"Content-Type": "application/json"}, "method": "POST"});
  })
});
