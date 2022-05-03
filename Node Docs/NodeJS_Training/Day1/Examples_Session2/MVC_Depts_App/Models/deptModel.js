var depts = 	[
    {deptno:10, dname: "Accounts", loc: "Hyd"},
    {deptno:20, dname: "Sales", loc: "Pune"},
    {deptno:30,dname: "Marketing", loc:"Chennai"}, 
    {deptno:40,dname: "Operations", loc:"Mumbai"}, 
    {deptno:50,dname: "Finanace", loc:"Pune"}	
];

exports.getDept = function(dno)
{
    var obj  = depts.find( item =>  item.deptno == dno );
    return obj;
}

exports.getDepts = function()
{
    return depts;
}

