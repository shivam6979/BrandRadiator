require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const route = require('./routes/userRoutes')

const connection= require("./db")

// database connection
 connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use('/',route)

const port = process.env.PORT || 8000;
app.listen(port,()=>console.log(`Listening on port ${port}`))