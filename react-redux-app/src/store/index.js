import {createStore} from 'redux';
import allReducers from './reducers/index'
// Create Store --- Store Needs Reducer to talk to
const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


export default store;