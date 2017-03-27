import User from './user.model';
import _ from 'lodash';
const dummyUsers = [
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
    return User.find({} ,function (error, result) {
        return response.status(200).json(result);
    });
    //return response.json(dummyUsers);
}

export function loadUser(request, response) {
    let userId = request.params.id;
    let conditions = {_id: userId};
    let users = User.find(conditions, function (error, result) {
        if(error) {
            console.log(error);
            return response.status(500).json('Internal error');
        }
        return response.status(200).json(result);
    });

}

//Insert an user
export function insertUser(request, response) {
    let newUser = request.body;
    return User.create(newUser, function (error) {
        if(error){
            return response.status(500).json('Insert user failed!');
        }
        return response.status(200).json('Insert user successful');
    });
    //return response.json('Done');
}
//Upsert an user
export function updateUser(request, response) {
    let userId = request.params.id;
    let conditions = {_id: userId};
    let update = {$set: request.body};
    let option = {upsert: true};
    console.log('updating user ' + userId);
    return User.update(conditions, update, option, function (error) {
        if(error){
            console.log(error);
            return response.status(500).json('User update failed');
        }
        return response.status(200).json('User is updated');
    });
    //response.json('Done');
}

export function deleteUser(request, response) {
    let userId = request.params.id;
    let conditions = {_id : userId};
    console.log('deleting user ' + userId);
    return User.remove(conditions , function (error) {
        if(error){
            console.log(error);
            return response.status(200).json('failed to deleted user');
        }
        return response.status(500).json('user is deleted');
    });
    //response.json('Done');
}