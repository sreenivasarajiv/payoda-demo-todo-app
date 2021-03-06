const express = require("express");
const app = express();
const port = process.env.PORT;
const path = require("path");

require("./startups/start-database")();
app.use(express.json());

app.use(require("cors")());
app.use(express.static(path.resolve("./public")));

const todoRoutes = require("./routes/todo.route");
app.use("/todos", todoRoutes);

const errorHandler = require("./middlewares/global-error-handler");
app.use(errorHandler);

app.listen(port, () =>
  console.log(`application is listening to port: ${port}`)
);
