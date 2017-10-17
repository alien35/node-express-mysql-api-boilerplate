var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'MY_PASSWORD',
    database : 'my_db'
});

try {
    connection.connect();
} catch(e) {
    console.log('Database Connection failed:' + e);
}

module.exports = connection;