import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/App';
import SignIn from './components/SignIn/SignIn';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';

import thunk from 'redux-thunk';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <CookiesProvider>
    <Provider store={ store }>
      <Router>
        <Route path={ process.env.PUBLIC_URL + '/' } exact component={ AppContainer } />
        <Route path={ process.env.PUBLIC_URL + '/login' } exact component={ SignIn } />
      </Router>
    </Provider>
  </CookiesProvider>,
  document.getElementById('root'));
registerServiceWorker();
