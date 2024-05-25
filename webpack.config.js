const path = require('path');
const path = require("path");

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        main: './Home.jsx',
        ProofOfStake: './ProofOfStake.jsx',
        admin: './Questions.jsx',
    },
    output: {
        filename: './jsx/[name].jsx',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        hot: true,
        static: {
            directory: './src',
            watch: true
        }
    }
};

const path = require("path")

module.exports = {
  entry : "./src/entry",
  output : {
    path: path.resolve(__dirname, "dist"),
    filename: "output.js"
  }
}