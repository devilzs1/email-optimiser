const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors"); 
const mongosanitize = require("express-mongo-sanitize"); 
const routes = require("./routes/index");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;


// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(mongosanitize());
app.use(routes);

mongoose
  .connect("mongodb://localhost:27017/email_optimization", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on PORT ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });



// Start server
app.listen(PORT, () => {
    console.log(`App running on PORT ${PORT} ...`);
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
