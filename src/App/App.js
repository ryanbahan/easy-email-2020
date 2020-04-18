import React from 'react';
import './App.css';
import { Builder } from '../FormComponents/Builder/Builder';
import { PreviewContainer } from '../EmailComponents/PreviewContainer/PreviewContainer';
import { DefaultTemplate } from '../Templates/DefaultTemplate';
import ErrorPage from '../ErrorPage/ErrorPage';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Analyzer from '../Analyzer/Analyzer';

function App(props) {
  return (
      <div className="App">
      {console.log(props)}
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

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(App);
