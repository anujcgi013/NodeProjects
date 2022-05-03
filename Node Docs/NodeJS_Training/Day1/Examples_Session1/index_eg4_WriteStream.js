var fs = require("fs");
var data = 'Usage of Streams in Node JS-3\n';

// Create a writable stream
// var writerStream = fs.createWriteStream('output_data.txt');

// create  Write Stream with append mode
var writerStream = fs.createWriteStream('output_data.txt', {flags:'a'});

// Write the data to stream with encoding to be utf8
writerStream.write(data,'UTF8');

// Mark the end of file
writerStream.end();

// Handle stream events --> finish, and error
writerStream.on('finish', function() {
    console.log("Write completed.");
});

writerStream.on('error', function(err){
   console.log(err.stack);
});

console.log("Program Ended");