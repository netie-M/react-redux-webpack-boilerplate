import mongoose from 'mongoose';

const connectionString = 'mongodb://localhost/reactreduxsample';

// Create the database connection
mongoose.connect(connectionString);

mongoose.connection.on('connected', function () {
    console.log('Mongoose connection open to ' + connectionString);
});

mongoose.connection.on('error',function (err) {
    console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
    console.log('Mongoose connection disconnected');
});

process.on('SIGINT', function() {
    mongoose.connection.close(function () {
        console.log('Mongoose connection disconnected through app termination');
        process.exit(0);
    });
});