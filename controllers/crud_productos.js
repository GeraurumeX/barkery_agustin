const conexion = require('../database/db');

exports.save_producto = (req, res) => {
    const producto = req.body.producto;
    const unidad = req.body.unidad;
    const descripcion = req.body.descripcion;
    const costo = req.body.costo;


    conexion.query('INSERT INTO productos SET ?', {producto:producto, unidad:unidad, descripcion:descripcion, costo:costo}, (error, results)=> {
        if(error){
            console.log(error);
        }else {
            res.redirect('/productos');
        }
    })
};



exports.update_producto = (req, res)=>{
    const id = req.body.id;
    const producto = req.body.producto;
    const unidad = req.body.unidad;
    const descripcion = req.body.descripcion;
    const costo = req.body.costo;
    conexion.query('UPDATE productos SET ? WHERE id = ?', [{ producto:producto, unidad:unidad, descripcion:descripcion, costo:costo }, id], (error, results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/productos');
        }
    })
}