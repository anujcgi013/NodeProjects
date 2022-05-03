var express = require('express');

// npm i body-parser   --save
var bodyParser = require("body-parser");

var app=express();
app.use(bodyParser.urlencoded({extended : false}));


app.get('/',function(req,res)
{
	var str  = "<h3 align='center'>Welcome to Express JS Application</h3>";
	str +=  "<hr/>";
	str +=  "<a  href='Login'>Login</a>";
	res.send(str);
});

app.get('/Login',function(req,res)
{	 
    res.sendFile( __dirname + "\\Login.html");
});

app.post('/Login',function(req,res)
{	 
    let uid = req.body.txtUid;
    let pwd = req.body.txtPwd;

    if(uid == "admin"  && pwd  == "admin123")
	{
		str  = "<h1 style='color:Green;'>Welcome to Admin</h1>";		
	}
	else
	{
		str  = "<h1 style='color:Red;'>Invalid user id or password</h1>";
	}	
	
	res.send(str);
});



var server=app.listen(3002,function() {});

 
console.log("Server Started. URL:http://localhost:3002");

