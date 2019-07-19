var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : '192.168.100.22',
    user     : 'unitext',
    password : '3jNfgDSf8@',
    database : 'unitext',
    multipleStatements: true,
});
module.exports=connection;
