import React from 'react';
import './App.css';
import { Builder } from '../FormComponents/Builder/Builder';
import { PreviewContainer } from '../EmailComponents/PreviewContainer/PreviewContainer';
import { DefaultTemplate } from '../Templates/DefaultTemplate';
import { Route } from 'react-router-dom';
import Analyzer from '../Analyzer/Analyzer';

function App() {
  return (
      <div className="App">
        <Route exact path="/">
          <Builder menus={DefaultTemplate} />
          <PreviewContainer />
        </Route>
        <Route path="/tone-analysis">
          <Analyzer />
        </Route>
      </div>
  );
}

export default App;
