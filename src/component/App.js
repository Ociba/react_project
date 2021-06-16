// resources/js/components/App.js
require('./bootstrap');
require('./componets.App');

import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import axios from 'axios';
import Header from './Header';
import SampleList from './SampleList';
import SampleCreate from './SampleCreate';
import SampleEdit from './SampleEdit';
axios.defaults.baseURL='http://127.0.0.1:8000/api';


class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Header />
        </div>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))