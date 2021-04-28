const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'panaderia_agustin'
});


connection.connect((error)=>{
    if(error){
        console.error('The connection error is: '+error);
        return
    }
    console.log('Successful connection to the database!!!')
});

module.exports = connection;