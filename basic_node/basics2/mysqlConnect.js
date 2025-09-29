const mysql = require('mysql2');

// create a connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Admin@123',
    database: 'testdb'
});

// connect to the database
connection.connect((errr)=> {
    if (errr) {
        return console.error('❌ Error connecting to the database:', errr.stack);
    }
    console.log('✅ Connected to the database as ID:', connection.threadId);
});

// query example
connection.query('SELECT 1 + 1 AS solution', (error, results, fields) => {
    if (error) {
        return console.error('❌ Error executing query:', error.stack);
    }
    console.log('✅ The solution is:', results[0].solution);
});

connection.end();