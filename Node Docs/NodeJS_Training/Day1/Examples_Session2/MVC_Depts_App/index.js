var express = require('express');
var deptModel = require("./Models/deptModel");

// npm i body-parser   --save
var bodyParser = require("body-parser");

var app=express();
app.use(bodyParser.urlencoded({extended : false}));
app.set("view engine", "ejs");


app.get('/',function(req,res)
{ 
    res.render(__dirname + "/Views/home.ejs"); 
});

app.get('/ShowDepts',function(req,res)
{     
    var data = {}; 	
    // Get data from Model
	data.deptsArray  = deptModel.getDepts();    

    // Send the data to view
    res.render(__dirname + "/Views/depts.ejs", data); 
});

app.get('/details/:id',function(req,res)
{
    var data = {}; 	    
	data.deptObj  = deptModel.getDept(req.params.id);    
    res.render(__dirname + "/Views/details.ejs", data); 
});


 



var server=app.listen(3002,function() {});

 
console.log("Server Started. URL:http://localhost:3002");

