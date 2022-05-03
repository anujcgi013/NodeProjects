var express = require('express');
var deptModel = require("../Models/deptModel");
var path = require('path');

let router = express.Router();
var app=express();
const viewFolderPath = path.resolve('Views');

router.use(express.json());
router.use(express.urlencoded({
  extended: true
}));

router.get('/',function(req,res)
{     
    var data = {}; 	
    deptModel.find({}, function(err, resData) 
	{
		if(err)	 {    
			console.log(err); 
			return; 
        } 

        let result = {};
        result.status = "success";
        result.data =  resData;
        result.message = "Successfully! All records has been fetched.";

		res.send(result);
	});
});

router.get('/:id',function(req,res)
{
    var data = {}; 	
    deptModel.findOne({"deptno":req.params.id}, function(err, resData) 
	{
		if(err)	 {    
			console.log(err); 
			return; 
        }
		       
		res.send(resData);		
	});
});

router.post('/',function(req,res)
{
   // New Object for Dept Model Object
	var deptObj  = new  deptModel({ 
		deptno : parseInt(req.body.deptno),	
		dname  :  req.body.dname,
		loc   : req.body.loc  });


	deptObj.save(function(err) 
	{
		if(err)	 {  console.log(err); return; }		
        let result = {};
        result.status =  "New Dept details inserted in Database";
		console.log("New Dept details inserted in Database");
		 res.send(result);
	});
});

router.put('/:id',function(req,res)
{   
	var deptObj  = { 
		deptno : parseInt(req.body.deptno),	
		dname  :  req.body.dname,
		loc   : req.body.loc  };


    deptModel.findOneAndUpdate({ deptno: req.params.id }, deptObj, function(err) 
	{
		if(err)	 {  console.log(err); return; }		
        let result = {};
        result.status =  "Requested Dept details updated in Database";
		console.log("Requested Dept details updated in Database");
		 res.send(result);
	});
});

router.delete('/:id',function(req,res)
{
    deptModel.findOneAndRemove({"deptno":req.params.id}, function(err)  
	{
		if(err)	 {    
			console.log(err); 
			return; 
        }
		
        let result = {};
        result.status =  "Requested Dept details deleted from Database";
		console.log("Requested Dept details deleted from Database");
		res.send(result);	
	});
});

module.exports = router;