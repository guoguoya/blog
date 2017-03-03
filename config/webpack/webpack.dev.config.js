import basePath from '../../basePath';
import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin  from 'extract-text-webpack-plugin';

const { rootPath } = basePath ;  
let entry = { 
  main: ['webpack/hot/dev-server','webpack-hot-middleware/client', 'whatwg-fetch',path.join(rootPath, './src/resourses/public/less/index.js'),path.join(rootPath, './src/resourses/main.js')]

};

let output = {
  filename: 'index.js',
  path: '/',
  publicPath: '/build/'
};

let plugins = [];
plugins.push(new webpack.HotModuleReplacementPlugin());
plugins.push(new ExtractTextPlugin('index.css'));

let module = {
  loaders: [ 
  ]
};


module.loaders.push({
  test: /\.js$/,
  exclude: '/node_modules/',
  loader: 'babel-loader'
});

module.loaders.push({
  test: /\.less$/,
  exclude: '/node_modules/',
  loader: ExtractTextPlugin.extract('style-loader', 'css-loader', 'less-loader')
});

let config = Object.assign({}, {entry, output, module, plugins}); 

export default config;