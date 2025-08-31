const path = require("path");

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "index.js"),
    output: {
      filename: "main.js",
      path: path.resolve(__dirname, "target"),
      clean: true,
    },
};
