import mysql from "mysql";
var con = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'Tugba494',
    database:'ShoeManagementSystem'
});

con.connect(function(err){
    if(err) throw err;
    console.log('db sucessfull!');
});
export default con;

