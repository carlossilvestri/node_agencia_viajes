//Importar Express
const express = require('express');
const router = express.Router();
const Viaje = require('../modelos/Viajes');
const Testimonial = require('../modelos/Testimoniales');
/*Controladores */
const nosotroController = require('../controllers/nosotrosController');
const homeController = require('../controllers/homeController');
const viajesController = require('../controllers/viajesController');
const testimonialesController = require('../controllers/testimonialesController');

module.exports = function() {
    //use responde a todos los verbos de HTTP.
    router.get('/', homeController.consultasHomePage);
    router.get('/nosotros', nosotroController.infoNosotros); //Objeto del controlador nosotros . nombre del controlador
    router.get('/viajes', viajesController.mostrarViajes);
    router.get('/viajes/:id', viajesController.mostrarViaje);
    router.get('/testimoniales', testimonialesController.mostrarTestimoniales);
    //Cuando se llena el formulario de testimoniales (POST). req.body va a leer los campos name=""
    router.post('/testimoniales', testimonialesController.agregarTestimonial);

    return router;
}