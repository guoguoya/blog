import React , { Component } from 'react';

export default class Provider extends Component {
  static childContextTypes = {
    store: React.PropTypes.object
  };

  constructor(props) {
    super(props);
  }

  getChildContext() {
    return {
      store: this.props.store 
    };
  }

  render() {
    return (
      <div className="provider">
        { this.props.children }
      </div>
    );
  }
} 

export connect(store) {
  return function(target) {
    const  CombineProp = target.constructor ; 
    target.constructor = function(props, context) {
      const arg = Object.assign({}, props, context);
      return CombineProp.call(target, arg);
    }
  }
}