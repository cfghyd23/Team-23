require("dotenv").config();
const cors = require("cors");
const child = require("./routes/users");
const express = require("express");
const workoutRoutes = require("./routes/workouts");
const mongoose = require("mongoose");

//express app
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//Routes
app.use("/workout", workoutRoutes);
app.use("/child", child);

const uri = "mongodb://localhost:27017";
mongoose.connect(uri, {
  // @ts-ignore
  useNewUrlParser: true,
  useUnifiedTopology: true,
  family: 4,
});
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("connected to MongoDB successfully!");
});
