// Generated by CoffeeScript 1.8.0
(function() {
  var Evernote, makeNote;

  Evernote = require('evernote').Evernote;

  makeNote = function(noteStore, noteTitle, noteBody, parentNotebook, callback) {
    var nBody, ourNote;
    nBody = '<?xml version="1.0" encoding="UTF-8"?>';
    nBody += '<!DOCTYPE en-note SYSTEM "http://xml.evernote.com/pub/enml2.dtd">';
    nBody += '<en-note>' + noteBody + '</en-note>';
    ourNote = new Evernote.Note;
    ourNote.title = noteTitle;
    ourNote.content = nBody;
    if (parentNotebook) {
      ourNote.notebookGuid = parentNotebook;
    }
    noteStore.createNote(ourNote, function(err, note) {
      if (err) {
        console.log(callback(err));
      } else {
        callback(null, note);
      }
    });
  };

  module.exports = makeNote;

}).call(this);

//# sourceMappingURL=makeNote.js.map
