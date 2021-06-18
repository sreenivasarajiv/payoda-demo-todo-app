const mongoose = require("mongoose");

module.exports = function () {
  mongoose
    .connect("mongodb://127.0.0.1:27017/payoda-demo")
    .then(() => console.log("database connected successfully"));
};
