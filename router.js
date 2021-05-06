const express = require('express');
const router = express.Router();

const connection = require('./database/db');


// RUTAS PARA CLIENTES

//Mostrar todos los clientes
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
            res.render('edit', {cliente:results[0], direccion:results[0], nombre_contacto:results[0], telefono:results[0]});
        }
    })
});


//Ruta para eliminar cliente
router.get('/delete/:id', (req, res)=> {
    const id = req.params.id;
    connection.query('DELETE FROM clientes WHERE id = ?', [id], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.redirect('/');
        }
    });
});


//RUTAS PARA PRODUCTOS

//Mostrar todos los productos
router.get('/productos', (req, res) => {
    connection.query('SELECT * FROM productos', (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('index_productos', {results:results});
        }
    });
});


//Ruta crear productos
router.get('/crear_producto', (req, res)=> {
    res.render('crear_producto');
});


//Ruta para editar productos
router.get('/editar_producto/:id', (req,res)=> {
    const id = req.params.id;
    connection.query('SELECT * FROM productos WHERE id=?',[id], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('editar_producto', {producto:results[0], unidad:results[0], descripcion:results[0], costo:results[0]});
        }
    })
});


//Ruta para eliminar productos
router.get('/delete_producto/:id', (req, res)=> {
    const id = req.params.id;
    connection.query('DELETE FROM productos WHERE id = ?', [id], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.redirect('/productos');
        }
    });
});




const crud = require('./controllers/crud');
router.post('/save', crud.save);
router.post('/update', crud.update);

const crud_productos = require('./controllers/crud_productos');
router.post('/save_producto', crud_productos.save_producto);
router.post('/update_producto', crud_productos.update_producto);


module.exports = router;