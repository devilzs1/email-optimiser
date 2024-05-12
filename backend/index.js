const express = require('express');
const bodyParser = require('body-parser');

require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;


// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
    res.send("Hello World! This is a email-optimiser app.")
})

// Start server
app.listen(port, () => {
    console.log(`App running on port ${port} ...`);
});


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
