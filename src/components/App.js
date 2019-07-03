import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../store/reducers';

import InformationListContainer from './InformationList/InformationListContainer';

import './App.scss';

const store = createStore(rootReducer);

export default class App extends Component {

  render() {
    return (
      <Provider store={ store }>
        <div className="App">
          <InformationListContainer />
        </div>
      </Provider>
    );
  }
}