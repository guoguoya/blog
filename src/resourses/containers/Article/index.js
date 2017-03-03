import React , { Component } from 'react';
import  hljs from 'highlight.js';
import {inject, observer} from 'mobx-react';

@inject('store') @observer
export default class Page extends Component  {
  constructor(props) {
    super(props);
  }

  componentWillMount() {

  }

  componentDidMount() {
    console.log(123);
    hljs.initHighlightingOnLoad();
  }
  render()  
    const store = this.props.store;
    const list = store.articleListItems.map(function(item, index){
            return (<div key={index}>{ item }</div>)
          });
    return (
      <div>
        <div>{ this.props.state }</div>
        <div className="store">
         { list }
        </div> 
        <div>
        <pre>
        <code>
          let a = 1;
        </code>
        </pre>
        </div>
        <div></div>
      </div>
    );
  }
}