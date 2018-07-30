import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__;
const store = createStore(
    reducers,
    reduxDevtools && reduxDevtools(),
);

ReactDOM.render(
    <Provider store={ store }>
        <AppContainer/>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
