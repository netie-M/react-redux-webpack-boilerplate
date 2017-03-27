const initialState = {
    fetching: false,
    created: false,
    read: false,
    updated: false,
    deleted: false,
    users: [],
    error: null,
    message: ''
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_USER_START': {
            console.log('get user start...');
            return Object.assign({} ,state, {
                fetching: true
            });
        }
        case 'GET_USER_SUCCESSFUL': {
            console.log('get user successful');
            return Object.assign({}, state , {
                read: true ,
                fetching: false,
                users: action.payload
            });
        }
        case 'INSERT_USER_SUCCESSFUL': {
            console.log('insert user successful');
            return Object.assign({}, state , {
                created: true,
                message: action.payload
            });
        }
        case 'PROCESS_USER_ERROR': {
            console.log('process user error occurs');
            return Object.assign({} , state, {
                error: action.payload
            });
        }
    }
    return state;
};
