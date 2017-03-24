import {createStore} from 'redux';

const reducer = function (state , action) {
    if(action.type === 'aa') {
        return state - action.payload;
    }
    return state;
};

const store = createStore(reducer, 0);

store.subscribe(function () {
   console.log('state changed to ' + store.getState());
});

store.dispatch({type: "aa" , payload: 3});
store.dispatch({type: "bb" , payload: 3});