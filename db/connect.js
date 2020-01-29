var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'program',
  password : 'program',
  database : 'webprogram'
});
 
connection.connect();

module.exports=connection;