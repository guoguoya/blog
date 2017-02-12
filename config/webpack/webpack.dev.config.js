import basePath from '../../basePath';
import path from 'path';
import webpack from 'webpack';

let entry = { 
  main: ['webpack/hot/dev-server','webpack-hot-middleware/client',path.join(basePath.rootPath, './src/resourses/main.js')]
};

let output = {
  filename: 'bundle.js',
  path: '/',
  publicPath: '/build/js/'
};

let plugins = [];
plugins.push(new webpack.HotModuleReplacementPlugin());


let module = {
  loaders: [ 
  ]
};

module.loaders.push({
  test: /\.js$/,
  exclude: '/node_modules/',
  loader: 'babel-loader'
});


let config = Object.assign({}, {entry, output, module, plugins}); 

export default config;