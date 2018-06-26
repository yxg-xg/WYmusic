const mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit : 10,
    host            : 'example.org',
    user            : 'bob',
    password        : '1234',
    database        : 'my_db'
})
