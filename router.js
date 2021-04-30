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


//Ruta crear clientes
router.get('/create', (req, res)=> {
    res.render('create');
});


//Ruta para editar clientes
router.get('/edit/:id', (req,res)=> {
    const id = req.params.id;
    connection.query('SELECT * FROM clientes WHERE id=?',[id], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('edit', {customer:results[0]});
        }
    })
});


//Ruta para eliminar cliente
router.get('/delete/:id', (req, res)=> {
    const id = req.params.id;
    conexion.query('DELETE FROM clientes WHERE id = ?', [id], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.redirect('/');
        }
    });
});


const crud = require('./controllers/crud');
router.post('/save', crud.save);
router.post('/update', crud.update);




module.exports = router;