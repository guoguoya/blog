import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import mobx, { observable, observer, autorun , action, extras } from 'mobx';


import Page from './pages/default/index';
import RouterManage from './router/index';



/*test mobx*/
/*var store = observable({
  val: 111
});

console.log('main.autorun');

console.log(store);

autorun(function(){
  console.log(`storechange ${store.val}`);
});

console.log('hehe');
store.val = 123;

console.log('end mobx');
*/
/*test mobx*/
render(<RouterManage></RouterManage>, document.getElementById('base'));

