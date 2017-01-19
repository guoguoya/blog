import express from 'express';

const { NODE_ENV } = process.env ; 


if( NODE_ENV !== 'development') {
  console.error("It's not a develop env");
  return false;
}


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
 * router config
 */


app.get('/', function(req, res){
  res.send('hehe');
});



const server = app.listen(config.port);

console.log(`server is run on ${config.port}` );