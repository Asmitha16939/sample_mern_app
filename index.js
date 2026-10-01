let express = require('express');
let app = express();
let mongoose = require('mongoose');

let emproutes = require('./routes/emp_route');

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database Connection
mongoose.connect("mongodb://localhost:27017/hrmanagement")
    .then(() => console.log("db connected successfully"))
    .catch((err) => console.log("Database connection error:", err));

// Mount Route under /api/hr
app.use("/api/hr", emproutes);

// Listen on Port 3002
app.listen(3002, () => {
    console.log("server listening on port 3002");
});