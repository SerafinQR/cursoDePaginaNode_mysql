//conexion a una base de datos

var mysql = require('mysql');

var con = mysql.createConnection({
   host:    'localhost',
   user:    'root',
   password:'qurs1403',
           
});


con.connect(function(err){
    if (err) throw err;
    console.log('conectado con exito');
});



