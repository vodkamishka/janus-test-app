import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducer from './reducers';
import reducerShowHideColumn from './reducers/reduserShowHideColumns';

let reducers = combineReducers({
     data: reducer,
     columns: reducerShowHideColumn
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;