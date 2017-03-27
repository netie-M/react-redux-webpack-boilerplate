import express from 'express';
import path from 'path';
import _ from 'lodash';
import bodyParser from 'body-parser';

const app = express();
const port = 8888;

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

//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

// parse application/json
app.use(bodyParser.json());

app.get('/', function (request , response) {
   //response.sendFile(path.join(__dirname, '../client/src/index.html'));
    response.json('Hello World');
});

//Create user
app.post('/api/users', function (request, response) {
    console.log('creating user... ');
    console.log(request.body);
    response.json('Done');
});

//Read user(s)
app.get('/api/users', function (request, response) {
    response.json(Users);
});

app.get('/api/users/:id', function (request, response) {
    let userId = request.params.id;
    let users = _.find(Users, (user) => {
        return user.id == userId
    });
    response.json(users);
});


//Update user
app.put('/api/users/:id', function (request, response) {
    let userId = request.params.id;
    console.log('updating user' + userId);
    console.log(request.body);
    response.json('Done');
});


//Delete user
app.delete('/api/users/:id', function (request, response) {
    let userId = request.params.id;
    console.log('deleting user' + userId);
    response.json('Done');
});

app.listen(port , function (error) {
   if(error) {
       console.log(error);
   }else {
       let lisentingAddress = 'http://localhost:' + port;
       console.log('Listening at ' + lisentingAddress);
   }
});

