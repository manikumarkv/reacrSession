// import React from 'react';
// import ReactDOM from 'react-dom';
// // import './index.css';
// import * as serviceWorker from './serviceWorker';
// // import App from './day7/App';
// // import Routing from './day8/Routing';
// // import AppMani from './day8/AppMani';
// import AppMainComponent from './day9/MainComponent';

// ReactDOM.render(<AppMainComponent/>, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import { createStore } from 'redux';

function informer1(){
    console.log('this is informer 1')
}

function informer2(){
    console.log('this is informer 2')
}


// function informer3(){
//     console.log('this is informer 3')
// }

function counter(state = 1, action) {

    switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}


let store = createStore(counter)
store.subscribe(() =>{
    informer1()
    // informer2()
    // informer3()
})
store.subscribe(() =>{
    //informer1()
    informer2()
    // informer3()
})

console.log('current state:', store.getState())

store.dispatch({ type: 'INCREMENT' })

// console.log('current state:', store.getState())
store.dispatch({ type: 'DECREMENT' })
store.dispatch({ type: 'DECREMENT' })
console.log('current state:', store.getState())
