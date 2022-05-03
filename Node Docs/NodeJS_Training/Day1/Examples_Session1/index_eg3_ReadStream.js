// Node JS example to demonstrate event handling concept
var fs = require('fs');

var readerStream = fs.createReadStream('input_data.txt');
readerStream.setEncoding('UTF8');

var strContent  = "";

readerStream.on("data", function (file_data) 
{	    
	//  console.log(file_data);
    strContent  +=  file_data;
});

readerStream.on("end", function (file_data) 
{	
    console.log(strContent);
	console.log("File reading process completed.");
});

readerStream.on('error', function(err)
{
   console.log("Error occurred while reading the file.");	 	
   console.log(err.stack);
});






