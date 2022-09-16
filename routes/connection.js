const mysql=require('mysql')    //npm i mysql
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"cms_database",
    multipleStatements:true,
    dateStrings:true,
}
);
module.exports=con;