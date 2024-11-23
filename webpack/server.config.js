const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  target: "node",
  entry: "./server.js",
  mode: "production",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "server.js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  externals: [nodeExternals()], // not bundle node modules
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: "null-loader", // Ignore SCSS imports on the server
      },
    ],
  },
};
