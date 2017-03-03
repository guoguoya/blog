import React , { Component } from 'react';
import { Link } from 'react-router';
import { inject, observer } from 'mobx-react';

@inject('store') @observer
export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  handleClick(e) {
    const state = e.target.innerText;
    console.log('handleClick=', state);
    console.log(this.props);
    this.props.store.fetchData();
    this.atnUpdateState(state);
  }

  atnUpdateState(state) {
    return this.props.store.updateState(state);
  }

  render() {
    return (
      <header>
        <nav className={ this.props.store.state } onClick={ this.handleClick.bind(this) }>
          <div><Link to="/css/1">css</Link></div>
          <div><Link to="/javascript/1">javascript</Link></div>
          <div><Link to="/node/1">node</Link></div>
          <div><Link to="/python/1">python</Link></div>
          <div><Link to="/life/1">life</Link></div>
        </nav>
      </header>
    );
  }
}