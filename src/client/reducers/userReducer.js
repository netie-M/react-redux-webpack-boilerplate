const initialState = {
    fetching: false,
    fetched: false,
    users: [],
    error: null
};

export default function reducer(state = {
    fetching: false,
    fetched: false,
    users: [],
    error: null
} , action) {
    switch (action.type) {
        case 'GET_USER_START': {
            console.log('get user start...');
            return Object.assign({} ,state, {
                fetching: true
            });
        }
        case 'GET_USER_SUCCESSFUL': {
            console.log('get user successful from action payload...');
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
