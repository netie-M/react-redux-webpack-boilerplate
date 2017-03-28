import express from 'express';
import routes from './routes';
import config from './config';
import dbManager from './db/mongodb.manager';

import webpack from 'webpack';
import webpackConfig from '../../webpack.config.babel';
import webpackDevMiddleware from 'webpack-dev-middleware';

const app = express();
const port = 8080;
const compiler = webpack(webpackConfig);

config(app);

routes(app);

 app.use(webpackDevMiddleware(compiler, {
     noInfo: true, publicPath: webpackConfig.output.publicPath
 }));

app.listen(port , function (error) {
   if(error) {
       console.log(error);
   }else {
       let lisentingAddress = 'http://localhost:' + port;
       console.log('Listening at ' + lisentingAddress);
   }
});

