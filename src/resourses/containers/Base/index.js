import React , { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Header from '../Header';
import Footer from '../Footer';



@inject('store') @observer
export default class Base extends Component {
  static className = "Base"; 
  static propTypes = {

  };

  constructor(props){
    super(props);
  }

  renderContent() {

  }

  render() {
    return (
      <div className="basePage" >
        <Header></Header>
        { this.props.children }
        <Footer></Footer>
      </div>
    );
  }
}