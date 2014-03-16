var path = require("path");

module.exports = {
    context: path.join(__dirname, "src"),
    entry: path.join(__dirname, "src", "index.js"),
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
      loaders: [
        { test: /\.hbs$/, loader: "handlebars-loader" }
      ],
    }
};