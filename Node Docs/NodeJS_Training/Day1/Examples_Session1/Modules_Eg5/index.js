var empModule  = require("./employeesModule.js");

let empsArray =  empModule.getEmps();

for(let i in  empsArray)
{
    let str  = `Employee Details:  ( Id : ${empsArray[i].empno}, Name  : ${empsArray[i].ename}, Job :  ${empsArray[i].job} )`;

    console.log(str);
}


