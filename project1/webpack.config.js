const path = require("path");

module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry: ["./src/index.js"],
  output: {
    filename: "bundle.js",
    path: __dirname + "/public",
    publicPath: "/"
  },
  resolve: {
    alias: {
      "#PROJECT2": path.resolve(__dirname, "../project2"),
    },
    modules: [
      // load dependencies of main project from within packages
      path.resolve(__dirname, "./node_modules"),
    ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/
      }
    ]
  }
};
