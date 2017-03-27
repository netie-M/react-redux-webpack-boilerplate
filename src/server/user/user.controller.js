//import User from './user.model';
import _ from 'lodash';
const Users = [
    {
        "id": 1,
        "fullname": "Nick Gu",
        "gender": "male",
        "age": 30
    },
    {
        "id": 2,
        "fullname": "Test User One",
        "gender": "female",
        "age": 20
    },
    {
        "id": 3,
        "fullname": "Test User Two",
        "gender": "male",
        "age": 25
    }
];

//Load all users
export function loadAllUser(request, response) {
    //return User.find().exec();
    return response.json(Users);
}

export function loadUser(request, response) {
    //return User.findById(id).exec();
    let userId = request.params.id;
    let users = _.find(Users, (user) => {
        return user.id == userId
    });
    response.json(users);
}
//Insert an user
export function insertUser(request, response) {
    //return User.create(user).exec();
    console.log('creating user... ');
    console.log(request.body);
    //return response.json('Done');
}

export function updateUser(request, response) {
    let userId = request.params.id;
    console.log('updating user' + userId);
    console.log(request.body);
    //response.json('Done');
}

export function deleteUser(request, response) {
    let userId = request.params.id;
    console.log('deleting user' + userId);
    //response.json('Done');
}