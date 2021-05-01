const conexion = require('../database/db');

exports.save = (req, res) => {
    const cliente = req.body.cliente;
    const direccion = req.body.direccion;
    const nombre_contacto = req.body.nombre_contacto;
    const telefono = req.body.telefono;


    conexion.query('INSERT INTO clientes SET ?', {cliente:cliente, direccion:direccion, nombre_contacto:nombre_contacto, telefono:telefono}, (error, results)=> {
        if(error){
            console.log(error);
        }else {
            res.redirect('/');
        }
    })
};



exports.update = (req, res)=>{
    const id = req.body.id;
    const cliente = req.body.cliente;
    const direccion = req.body.direccion;
    const nombre_contacto = req.body.nombre_contacto;
    const telefono = req.body.telefono;
    conexion.query('UPDATE clientes SET ? WHERE id = ?', [{ cliente:cliente, direccion:direccion, nombre_contacto:nombre_contacto, telefono:telefono }, id], (error, results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }
    })
}