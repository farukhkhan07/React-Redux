import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// import {Provider} from 'react-redux'
import store from './store/index'
// import firstAction from './store/actions/firstAction'
// import secondAction from './store/actions/secondAction'
// import thirdAction from './store/actions/thirdAction'
// import firstReducer from './store/reducers/firstReducer';

//Creating First Reducer -- Reducer needs InitialState and Actions to get and set states
// const firstReducer = (state = {} , actions) => {
//     if (actions.type === 'FirstReducerAction')
//     {
//         return {ResponseOfPayload1: actions.payload}
//     }
//     return {...state};

// }

// //Creating Second Reducer
// const secondReducer = (state, actions) => {
//     return false;
// }


// //Creating Third Reducer
// const thridReducer = (state, actions) =>
// {
//     if(actions.type === 'ThridReducerAction')
//     {
//         return {ResponseOfPayload3: actions.payload}
//     }
//     return false
// }

//Too many Reducers need to be combined -- use combineReducers
// const allReducers = combineReducers({firstReducer,secondReducer, thridReducer})

// // Create Store --- Store Needs Reducer to talk to
// const store = createStore(allReducers)

//Checking State -- Checking the state for the first time will be default that is given in the Reducers
// console.log("State Before Dispatching",store.getState())


//Creating Action -- Action need store to dispatch the state for the Reducer -- Action needs type and payload i.e. response if the type matches

// store.dispatch({type:'FirstReducerAction', payload:'Our First Reducer Action'})
// console.log("State1: After dispatching Action1", store.getState())
// store.dispatch({type:'ThridReducerAction', payload:'Our Third Reducer Aciton'})
// console.log("State2: After dispatching Action3", store.getState())

// console.log("Nothing in the State -- Should be Null",store.getState());
// store.dispatch(firstAction);

// console.log('First Action Should Have Something',store.getState());
// store.dispatch(secondAction);
// console.log('Second Action Should Have Something Now -- While First One will the same like last one',store.getState());
// store.dispatch(thirdAction);
// console.log('Third Action Should Have Something Now -- While First and Second One will have the same values like last time',store.getState())

let render = () =>{
ReactDOM.render(
    <App />
   , 
    document.getElementById('root')
    );
}

store.subscribe(render)
render()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();
