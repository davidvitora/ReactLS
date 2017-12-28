import path_node from 'path';
var webpack = require("webpack");
const crypto = require('crypto');

//Compiles and saves the reactjs script which will be send to client
export default (path) =>{
  var react_path = path_node.resolve('public') + "/react"
  
  //Will generate the hash that will name the file
  var hash_filename = crypto.createHmac('sha256', 'appname')
  //uses path of the file
  .update(path)
  .digest('hex');

  var compiler = webpack({
    entry: path,
    output: {
      path: react_path,
      filename: hash_filename + '.js'
    },
    module: {
      loaders: [
        { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
        { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
      ]
    }
  })

  //will watch the file for changes (clientside) only in dev mode
  if(process.env.dev != 1){
    compiler.run((err,stats)=>{
      if(err){
        console.log(err.toString());
      }
    })
  } else {
    compiler.watch({
      aggregateTimeout: 300, 
      poll: true 
    }, (err, stats) => {
      if(err){
        console.log(err.toString());
      }
    });
  }

  //return hash
  return hash_filename;

}

