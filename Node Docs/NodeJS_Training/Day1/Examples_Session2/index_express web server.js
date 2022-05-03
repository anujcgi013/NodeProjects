var express = require('express');

var app=express();

app.get( '/',function (req,res)
{
	res.send('<h1>Web Application Development using Express!</h1>');
});

var server=app.listen(3002,function() {});

console.log("Server Started. URL:http://localhost:3002");

