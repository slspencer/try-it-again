// vars & constants
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");

// set up middleware for incoming routes
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// set up route names for static pages and routers
app.use(express.static("public")); // router to static files
app.use("/api", apiRoutes); // api routers to database
app.use("/", htmlRoutes); // html routers to dynamic web pages

// start the server listening on port 3001
app.listen(PORT, function() {
    console.log("Note taking server is listening on https://localhost/" + PORT);
});