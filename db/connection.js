const mysql = require('mysql2');

//Connect to databse
const db = mysql.createConnection(
    {
        host: 'localhost',
        //Your MySQL username
        user: 'root',
        //Your MySQL password
        password: 'tannebaum55$',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

module.exports = db;