const mongoose = require("mongoose");

module.exports = function () {
  mongoose
    .connect(process.env.DB_CONNECTION_STRING)
    .then(() => console.log("database connected successfully"))
    .catch((err) => console.error("database connection failed:", err))
};
