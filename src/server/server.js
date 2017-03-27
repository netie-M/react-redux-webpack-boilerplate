import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';
import config from './config';

const app = express();
const port = 8888;

config(app);

routes(app);

app.listen(port , function (error) {
   if(error) {
       console.log(error);
   }else {
       let lisentingAddress = 'http://localhost:' + port;
       console.log('Listening at ' + lisentingAddress);
   }
});

