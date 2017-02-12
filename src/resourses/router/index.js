import React , { Component } from 'react';
import { Router, Route , browserHistory } from 'react-router';

import Page from '../pages/default/index';
import Article from '../pages/article/index';

export default class RouterManage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router history={ browserHistory } >
        <Route path='/' component={ Page }>
        </Route>
        <Route path='/article' component={ Article }></Route>
      </Router>
    );
  }
} 