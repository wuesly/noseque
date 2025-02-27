const { where } = require('sequelize');
const {Usuario} = require('../models');

class UsuarioService{
    static async listarUsuarios(){
        try{
            return await Usuario.findAll();
        }
        catch (e){
            console.log("error en la consulta");
        }
    }

    static async crearUsuario(nombre,correo,contrasena){
        try{
            return await Usuario.create({nombre,correo,contrasena})
        }
        catch(e){
            console.log("error para guardar")
        }
    }

    static async buscarUsuario(correo){
        try{
            console.log(correo) 
            return await Usuario.findOne({where:{correo}})
        } 
        catch(e){
            console.log("error en el servicio buscar")
        }
    }

    static async eliminarUsuario(id){
        try{
            let resultadoB=await Usuario.destroy({where:{id}});
        }
        catch(e){
            console.log("error en el servicio eliminar");
        }
    }
    
    static async actualizarUsuario(id, nombre, correo, contrasena ) {
        try {
            return await Usuario.update({nombre, correo, contrasena},{where:{id}});
            }
            catch (e) {
            console.log("Error en el servicio actualizar:");
        }
    }  
}
module.exports=UsuarioService;