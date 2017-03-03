import React , { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Base from '../containers/Base/index';
import Article from '../containers/Article/index';

export default class RouterManage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router history={ browserHistory } >
        <Route path='/' component={ Base }>
          <IndexRoute component= { Base } ></IndexRoute>
          <Route path='/:articleName/:id' component={ Article }></Route>
        </Route>
      </Router>
    );
  }
} 