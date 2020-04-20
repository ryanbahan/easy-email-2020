import React from 'react';
import './App.css';
import { Builder } from '../FormComponents/Builder/Builder';
import PreviewContainer from '../EmailComponents/PreviewContainer/PreviewContainer';
import { DefaultTemplate } from '../Templates/DefaultTemplate';
import ErrorPage from '../ErrorPage/ErrorPage';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Analyzer from '../Analyzer/Analyzer';
import PropTypes from 'prop-types';

const App = (props) => {
  return (
      <div className="App">
        {props.error && <Redirect to="/error" />}
        <Route exact path="/">
          <Builder menus={DefaultTemplate} />
          <PreviewContainer />
        </Route>
        <Route path="/tone-analysis">
          <Analyzer />
        </Route>
        <Route path="/error">
          <ErrorPage />
        </Route>
      </div>
  );
}

const mapStateToProps = state => ({
  error: state.error,
})

App.propTypes = {
  error: PropTypes.bool,
}

export default connect(mapStateToProps)(App);
