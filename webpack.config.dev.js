// const path = require('path');
// const devServer = require('webpack-dev-server')


// module.exports = {
//   mode: 'development',
//   entry: {
//     myfile: './src/index.js'
//   },
//   output: {
//     path: path.resolve(__dirname, 'build'),
//     filename: 'js/bundle.js',
//     publicPath: '/assets/'
   
//   },
//   devServer: {
//     port: 8000,
//     contentBase: path.join(__dirname, 'dist')
//   },
//   module: {
//     loaders: [{
//       test: /.jsx?/,
//       loader: 'babel-loader',
//       exclude: /node_modules/,
//       query: {
//         presets: ['es2015', 'react']
//       }
//     }]
//   }
// };