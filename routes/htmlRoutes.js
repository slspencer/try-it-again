// vars & constants
const path = require("path");
const router = require("express").Router();

// router to access the notes.html file
router.get("/notes", (req, res) => {
    // join creates an absolute path for sendFile()
    res.sendFile(path.join(__dirname, "../public/notes.html")); // return the notes.html file
});

// default router which always returns index.html
router.get("*", (req, res) => {
    // join creates an absolute path for sendFile()
    res.sendFile(path.join(__dirname, "../public/index.html")); // return the index.html for all other requests
});

module.exports = router;