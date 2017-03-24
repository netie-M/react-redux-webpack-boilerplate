import express from 'express';
import path from 'path';

const app = express();
const port = 8080;

app.get('/', function (request , response) {
   response.sendFile(path.join(__dirname, '../client/src/index.html'));
});

app.listen(port , function (error) {
   if(error) {
       console.log(error);
   }else {
       let lisentingAddress = 'http://localhost:' + port;
       console.log('Listening at ' + lisentingAddress);
   }
});

