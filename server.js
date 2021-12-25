// modules
const express = require("express");
const { join } = require("path");
const router = require("./router");

// create express app
const app = express();
const PORT = 4000;

// set ejs engine
app.set("view engine", "ejs");
app.set("views", join(__dirname, "./views"));


// serve public files
app.use(express.static(join(__dirname, "public")));

// router
app.use(router);

app.listen(PORT, () => console.log(`Server is running on port:${PORT}`));
