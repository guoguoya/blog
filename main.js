import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import Page from './src/page/default/index';


render(<Page></Page>, document.getElementById('base'));