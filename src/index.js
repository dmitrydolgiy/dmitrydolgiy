import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={ store }>
        <AppContainer/>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
