import React , { Component } from 'react';

import showdown ,{ Converter } from 'showdown';

let html      = converter.makeHtml(text);

export default class Page extends Component  {
  constructor(props) {
    super(props);
  }

  componentWillMount() {

  }

  render() {
    return (
      <div>
        <div>art123123icle</div>
        <div>{html}</div>
        <div dangerouslySetInnerHTML={ { __html: html  } }></div>
      </div>
    );
  }
}