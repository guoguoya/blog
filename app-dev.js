import path from 'path';
import basePath from './basePath';
import express from 'express';
import log4js from 'log4js';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackDevConfig from './config/webpack/webpack.dev.config.js';
import markdownController from './src/controllers/markdown';

const { NODE_ENV } = process.env ; 

if( NODE_ENV !='development') {
  console.error('Its not a develop env');
}



/**
 * path
 */
const LOG_CONFIG_PATH = path.resolve('./config/log/log.config.json');


/**
 *  defaults
 */

let defaults = {
    port: '3030'
}


/**
 * [config server config]
 * 
 */

const config = Object.assign({}, defaults);


const app = express();

/**
 *  dev-middleware 
 */
const compiler = webpack(webpackDevConfig);
       
app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackDevConfig.output.publicPath,
  stats: { colors: true }
}))


app.use(webpackHotMiddleware(compiler, {
  log: console.log
}));
/**
 * logger
 */


log4js.configure(LOG_CONFIG_PATH);

let logger = log4js.getLogger('logfile');
app.use(log4js.connectLogger(logger));


/**
 *  bodyParser
 */

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false 
}))


/**
 * cookieParser
 */

app.use(cookieParser());

/**
 *  static
 */

app.use(express.static(path.resolve(__dirname, 'static')));


/**
 * router config
 */

app.use('/', markdownController);


app.get('/*', function(req, res){
  res.sendFile(path.join(basePath.rootPath,'./src/resourses/index.html'), {}, function(err){
    if (err) {
      console.log(err);
      res.status(err.status).end();
    } else {
      console.log('send: file');
    }
  });
});



const server = app.listen(config.port);

console.log(`server is run on ${config.port}` );