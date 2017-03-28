import userRoute from './user/index';
import path from 'path';

export default function (app) {
    app.use('/api/users', userRoute);

    //handle other routes
    app.get('/', function (request, response) {
        response.sendFile(path.join(__dirname, '../../dist/index.html'));
        //response.json('Hello World');
    });
}
