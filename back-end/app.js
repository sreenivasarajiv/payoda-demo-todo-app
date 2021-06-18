const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

require("./startups/start-database")();
app.use(express.json());

app.use(require("cors")());

const todoRoutes = require("./routes/todo.route");
app.use("/todos", todoRoutes);

const errorHandler = require("./middlewares/global-error-handler");
app.use(errorHandler);

app.listen(port, () =>
  console.log(`application is listening to port: ${port}`)
);
