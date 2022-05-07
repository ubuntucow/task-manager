const express = require("express");
const app = express();
const port = process.env.PORT;
const Task = require("./models/task");
const User = require("./models/user");
require("./db/mongoose");
const userRouter = require("./routes/users");
const taskRouter = require("./routes/tasks");

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port);
