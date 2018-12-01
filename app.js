// let's the console know the app.js is started
console.log('Starting app.js');

// EXTERNAL LINKS

// [1] internal nodejs method 'fs'
const fs  = require('fs');

// [2] internal library  'lodash'
const _ = require('lodash');

// [3] internal library  'yargs'
const yargs = require('yargs');

// [4] stores the version of yargs you run
const argv = yargs.argv;

// [5] variable that fetch the first item of yargs
var command = argv._[0];

// PROJECT LINKS

// call the project file notes.js
const notes = require('./notes.js');

// PROGRAM (COMMAND LINE)

// supports the following commands:
// [1] add
// [2] list
// [3] read
// [4] delete


// Command 'add'
//  - create a note takes two arguments title and the body
if(command === 'add'){

    // call add function what is responsible for notes adding notes
    // - title
    // - body
    var note = notes.addNote(argv.title, argv.body);


    if(note){

        console.log('Note created');
        // print out the logNote function
        notes.logNote(note);
    } else {
        console.log('Note already exist');
    }

}
// Command 'list'
//  - loop through the function: getAll() from the notes.js file and loop through and gives the list
//    print it in de cmd the result of the list
else if (command === 'list'){

    // call list function what is responsible for listing notes
    var allNotes = notes.getAll();
    console.log('This is all the notes: ' + allNotes.length);

    // execute the elements once
    allNotes.forEach(function(note) {
        notes.logNote(note);
    });


}

// Command 'read'
//  - search if the title exist in the notes.json file
//    if it doesn't exist you get a message 'cant find note'
else if(command === 'read') {

    // call getNote function what is responsible for getting the note
    var note = notes.getNote(argv.title);


    if(note){
        console.log('Note is found');
        notes.logNote(note);

    }else{
        console.log('Cant find note');
    }

}
// Command 'delete'
//  - remove the note when the parameter title exist in the removeNote() function
//    if it doesn't exist you get a message 'note wasnt removed'
else if(command === 'delete') {

    // call removeNote function what is responsible for removing note
    var removeNote =  notes.removeNote(argv.title);

    // if the remove note is true print note was removed else note wasnt removed
    if(removeNote){
        console.log('Note was removed');
    } else {
        console.log('Note wasnt removed');
    }


}
else {

    console.log('command not recognized');

}



