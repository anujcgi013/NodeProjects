//Require Mongoose
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/testdb', {useNewUrlParser:true});

//Define a schema
var Schema = mongoose.Schema;

var DeptSchema = new Schema(
    {   deptno: Number, 
        dname : String, 	
        loc  : String}, 
    { versionKey: false  } );

var DeptModel = mongoose.model('depts', DeptSchema );

module.exports = DeptModel;