import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import imageUploaderApp from './reducers';
import './index.css';

let store = createStore(imageUploaderApp)

render(
   <Provider store = {store}>
      <App />
   </Provider>, document.getElementById('root'));