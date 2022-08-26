// vars & constants
const { notStrictEqual } = require("assert");
const fs = require("fs");
const uuid = require("uuid");
const router = require("express").Router();

// define router for reading all notes
router.get("/notes", (req, res) => {
    const db = fs.readFileSync("./db/db.json"); // get current notes, jsonified
    res.json(JSON.parse(db));  // return the jsonified notes
});

// define router for deleting a note
router.delete("notes/:id", (req, res) => {
    const dbJSON = JSON.parse(fs.readFileSync("./db/db.json")); // get current notes, jsonified
    const keepNotes = dbJSON.filter((keepNote) => keepNote.id !== req.params.id); // filter out the node with matching id
    fs.writeFileSync("./db/db.json", JSON.stringify(keepNotes)); // save the filtered notes back to the database
    res.json(keepNotes); // return jsonified notes, without the deleted note
});

// define router for adding a note
router.post("/notes", (req, res) => {
    const dbJSON = JSON.parse(fs.readFileSync("./db/db.json"));
    const addNote = req.body; // create an object from the parameter
    addNote.id = uuid.v4(); // assign a unique id
    dbJSON.push(addNote); // push the object to the jsonified notes
    fs.writeFileSync("./db/db.json", JSON.stringify(notes)); // save the jsonified notes to the database
    res.json(dbJSON); // return jsonified notes, with the new note
});

module.exports = router;