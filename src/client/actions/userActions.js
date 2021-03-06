import axios from 'axios';


export function getUsers() {
    return function (dispatch) {
        dispatch({type: 'GET_USER_START'});
        axios.get('http://localhost:8080/api/users')
            .then(function(response)  {
                dispatch({type: 'GET_USER_SUCCESSFUL' , payload: response.data});
            })
            .catch(function(error)  {
                dispatch({type: 'PROCESS_USER_ERROR' , payload: error});
            });
    }
}

export function insertUser(user) {
    return function (dispatch) {
        axios.post('http://localhost:8080/api/users' , user)
            .then(function (response) {
                dispatch({type: 'INSERT_USER_SUCCESSFUL' , payload: response.data});
            }).catch(function (error) {
                dispatch({type: 'PROCESS_USER_ERROR' , payload: error});
            });
    }
}

export function getDummyUser() {
    return {
        type: 'GET_USER_SUCCESSFUL',
        payload: [
                    {
                        "id": 2,
                        "fullname": "Dummy User One",
                        "gender": "female",
                        "age": 20
                    },
                    {
                        "id": 3,
                        "fullname": "Dummy User Two",
                        "gender": "male",
                        "age": 25
                    }
                ]
    }
}
