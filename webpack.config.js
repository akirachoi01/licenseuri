const path = require('path');

module.exports = {
  entry: './src/index.js',
  target: 'webworker',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'worker.js'
  },
  mode: 'production'
};
