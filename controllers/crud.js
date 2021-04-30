const conexion = require('../database/db');

exports.save = (req, res) => {
    const customer = req.body.customer;
    const direccion = req.body.direccion;
    const nombre_contacto = req.body.nombre_contacto;
    const telefono = req.body.telefono;
    //console.log(user +" - "+rol);

    conexion.query('INSERT INTO clientes SET ?', {customer:customer, direccion:direccion, nombre_contacto:nombre_contacto, telefono:telefono}, (error, results)=> {
        if(error){
            console.log(error);
        }else {
            res.redirect('/');
        }
    })
};



exports.update = (req, res)=>{
    const id = req.body.id;
    const customer = req.body.customer;
    const direccion = req.body.direccion;
    const nombre_contacto = req.body.nombre_contacto;
    const telefono = req.body.telefono;
    conexion.query('UPDATE clientes SET ? WHERE id = ?', [{ customer:customer, direccion:direccion, nombre_contacto:nombre_contacto, telefono:telefono }, id], (error, results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }
    })
}