import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const feedbackReducer = (state = [], action) => {
    if (action.type ==='GET_FEEDBACK'){
        console.log('in GET_FEEDBACK', action.payload);
        return [...state, action.payload];
    } else if (action.type ==='DELETE_FEEDBACK') {
        return state = [];
    }
    console.log(state);
    return state;
}


const storeInstance = createStore(
    combineReducers({
        feedbackReducer,
    }),
    applyMiddleware(logger),
);


// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>,
    
    document.getElementById('root')
);

registerServiceWorker();
