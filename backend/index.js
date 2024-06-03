const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors"); 
const mongosanitize = require("express-mongo-sanitize"); 
const mongoose = require("mongoose");
const routes = require("./routes/index");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;


// Middleware
app.use(
  cors({
    origin: "*",
    methods: ["GET", "PATCH", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(mongosanitize());
app.use(routes);

const DB = process.env.DBURI.replace("<PASSWORD>", process.env.DBPASSWORD);

mongoose.connect(DB).then(() => {
  console.log("Connected to MongoDB");
  // Start server
  app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
  });
})
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });



// Start server
// app.listen(PORT, () => {
//     console.log(`App running on PORT ${PORT} ...`);
// });


process.on("uncaughtException", (err) => {
  console.log(err);
  console.log("UNCAUGHT Exception! Shutting down ...");
  process.exit(1);
});

process.on("unhandledRejection", (err) => {
  console.log(err);
  console.log("UNHANDLED REJECTION! Shutting down ...");
  app.close(() => {
    process.exit(1);
  });
});
