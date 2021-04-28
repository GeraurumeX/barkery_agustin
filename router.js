const express = require('express');
const router = express.Router();

const connection = require('./database/db')

//Show all clients
router.get('/', (req, res) => {
    connection.query('SELECT * FROM clientes', (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('index', {results:results});
        }
    });
});






module.exports = router;