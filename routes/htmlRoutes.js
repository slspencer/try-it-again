// vars & constants
const path = require("path");
const router = require("express").Router();

// router to access the notes.html file
router.get("/notes", (req, res) => {
    // join creates an absolute path for sendFile()
    console.log("GET /notes - begin");
    notePath = path.join(__dirname, "../public/notes.html")
    res.sendFile(notePath); // return the notes.html file
    console.log("GET /notes - end");
});

// default router which always returns index.html
router.get("*", (req, res) => {
    console.log("GET * - begin");
    // join creates an absolute path for sendFile()
    res.sendFile(path.join(__dirname, "../public/index.html")); // return the index.html for all other requests
    console.log("GET * - end");
});

module.exports = router;