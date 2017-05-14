import App from './components/App';
import React from 'react';
import ReactDom from 'react-dom';
import router from './router';


ReactDom.render(router(), document.getElementById('app'));
