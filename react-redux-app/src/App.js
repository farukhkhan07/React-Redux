import React from 'react';
import logo from './logo.svg';
import './App.css';
import store from './store/index'
import secondAction from './store/actions/secondAction'
import firstAction from './store/actions/firstAction'
import thirdAction from './store/actions/thirdAction'

function onClickButton1(){
  store.dispatch(firstAction);
  console.log("In Function",store.getState())
}

function onClickButton2(){
  store.dispatch(secondAction);
  console.log("In Function",store.getState())
}

function onClickButton3(){
  store.dispatch(thirdAction);
  console.log("In Function",store.getState())
}

function App() {
  return (
    <div className="App">
      <h1 style={{textAlign:'center', color:'Red', backgroundColor:'Black'}}>REACT--REDUX</h1>
      <h5><button onClick={onClickButton1}>Click me to CALL First Reducer</button></h5>
      <h5>First Reducer: {store.getState().first.ResponseFirstReducer}</h5>
  
      <h5><button onClick={onClickButton2}>Click me to CALL Second Reducer</button></h5>
      <h5>Second Reducer: {store.getState().second.ResponseSecondReducer}</h5>


      <h5><button onClick={onClickButton3}>Click me to CALL Third Reducer</button></h5>
      <h5>Third Reducer: {store.getState().third.ResponseThirdReducer}</h5>

    </div>
  );
}
console.log(store.getState())
export default App;
