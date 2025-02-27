const express = require('express');
const router = express.Router();
const UsuarioController = require('../controller/usuarioController')

router.get('/user',UsuarioController.listarUsuarios);
router.post('/user', UsuarioController.crearUsuario);
router.put('/user/:id', UsuarioController.actualizarUsuario);
router.delete('/user/:id', UsuarioController.eliminarUsuario);
router.get('/user/:correo', UsuarioController.buscarUsuario);
module.exports=router;

//hola esto esta echo por wess
