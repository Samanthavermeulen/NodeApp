//let's the console know the app.js is started
console.log('Starting notes.js');

// call the methods that are variable
const fs = require('fs');

// function fetchNotes: get all the notes in notes.json and returns it. all exceptions are caught
// and when an exceptions occurs an empty array is returned

var fetchNotes = function () {

    // fetch the excising notes and duplicates
    try{
        var noteString = fs.readFileSync('notes.json');
        //takes the notes and parse it into a string
        return JSON.parse(noteString);
    }catch (e) {
        return [];
    }

};

// function saveNotes: puts the notes in the notes parameters in notes.json file and saved it
var saveNotes = function(notes) {

    // returns the notes in JSON string ify version
    fs.writeFileSync('notes.json', JSON.stringify(notes));

};



// function addNote: add Notes takes a title text and a body text. The
// function will add these as a note to notes.json when the title does not exist.
var addNote = function(title, body){

    // fetch the notes
    var notes = fetchNotes();
    var note = {
        title: title,
        body: body
    };

    // filter duplicates
    var duplicateNotes = notes.filter(
        function (note) {
            return note.title === title;
        }
    );


    // if the note is longer then 0
    if(duplicateNotes.length === 0){

        // push the notes in the array
        notes.push(note);

        // returns the notes in JSON string ify version
        fs.writeFileSync('notes.json', JSON.stringify(notes));
        saveNotes(notes);

        return note;

    }

};


// function getAll: get all the notes and returns the result
var getAll = function(){

    // return al the notes
    return fetchNotes();
};

// function getNote: filter the list of notes based on the title
var getNote = function(title){

    // fetch the notes
    var notes = fetchNotes();
    var filterNotes = notes.filter(
        function (note) {
            return note.title === title;
        }
    );
    return filterNotes[0];
};
// function removeNote: remove note based on the title
var removeNote = function(title){

    // fetch notes
    var notes = fetchNotes();

    // filter notes, removing the one with title of argument
    var filterNotes = notes.filter(
        function (note) {
            return note.title !== title;
        }
    );
    // save new notes array
    saveNotes(filterNotes);

    // if it's not equal return true
    return notes.length !== filterNotes.length;

};

// function name of the function, what does it do? how does the inside of the parameter works?   X
var logNote = function(note){
    // read command with --title
    // read command with --body

    console.log('--');
    console.log('Title: ' + note.title);
    console.log('--');
    console.log('Body: ' + note.body);

};


module.exports = {

    // points to the add function
    addNote: addNote,

    // points to the get all function
    getAll: getAll,

    // points to the get function
    getNote: getNote,

    // points to the remove function
    removeNote: removeNote,

    // points to the logNote function
    logNote: logNote,


};

