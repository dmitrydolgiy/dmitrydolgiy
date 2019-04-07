import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { authenticated } from './actions/auth';
import reducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';
import App from './components/App/App';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

const user = localStorage.getItem('user');
if (user) {
  console.log(user);
  store.dispatch(authenticated());
}

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
