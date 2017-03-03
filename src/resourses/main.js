"use strict";

import 'babel-polyfill';
import React, { component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
import store from './stores/index';

import Page from './containers/Base/index';
import RouterManage from './router/index';

import fetch from './untils/fetch'
const mainStore = new store();

//这种写法只能将store 整个传进去
//分不开 因为有些不是引用，内部（context 和 props 结合时）通过 = 赋值时是通过get方式，不是通过defineProperty

render(
  <Provider store={ mainStore } >
    <RouterManage></RouterManage>
  </Provider>
, document.getElementById('base'));

