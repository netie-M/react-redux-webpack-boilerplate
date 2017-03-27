import { applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

const initialState = {
    fetching: false,
    fetched: false,
    users: [],
    error: null
};

const reducer = function (state = initialState , action) {
    switch (action.type) {
        case 'GET_USER_START': {
            console.log('get user start...');
            return Object.assign({} ,state, {
                fetching: true
            });
        }
        case 'GET_USER_SUCCESSFUL': {
            console.log('get user successful...');
            console.log(action.payload);
            return Object.assign({}, state , {
                fetched: true ,
                fetching: false,
                users: action.payload
            });
        }
        case 'GET_USER_ERROR': {
            console.log('get user error...');
            console.log(action.payload);
            return Object.assign({} , state, {
                fetched: false ,
                fetching: false,
                error: action.payload
            });
        }
    }
    return state;
};

const middleware = applyMiddleware(thunk);
const store = createStore(reducer, middleware);


store.dispatch((dispatch) => {
    dispatch({type: 'GET_USER_START'});
    axios.get('http://localhost:8888/api/users')
        .then(function(response)  {
            dispatch({type: 'GET_USER_SUCCESSFUL' , payload: response.data});
        })
        .catch(function(error)  {
            dispatch({type: 'GET_USER_ERROR' , payload: error});
        });
});