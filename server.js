const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnetion");
const validateToken = require("./middleware/validateTokenHandler");
const validateTokenHandler = require("./middleware/validateTokenHandler");
const dotenv = require("dotenv").config();

connectDb();
const app = express();

const port = process.env.PORT || 5000;

// Middleware to parse JSON in the request body
app.use(express.json());
app.use(errorHandler);
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
