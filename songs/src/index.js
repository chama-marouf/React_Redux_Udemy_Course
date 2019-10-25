import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux'; 

import App from './components/App';
import Reducers from './reducers';

ReactDOM.render (
    <Provider store ={createStore(Reducers)}>
    <App/>
    </Provider>
,
 document.querySelector('#root')
 );
