import userRoute from './user/index';

export default function (app) {
    app.use('/api/users', userRoute);

    //handle other routes
    app.route('/*').get(function (request, response) {
        //response.sendFile(path.join(__dirname, '../client/src/index.html'));
        response.json('Hello World');
    });
}
