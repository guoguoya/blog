import React , { Component } from 'react';
import { Link } from 'react-router';

export default class Page extends Component  {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      page
        <div>
          <Link to='/article'>link to Article</Link>        
        </div>
      </div>
    );
  }
}