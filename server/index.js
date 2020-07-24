//Importar Express
const express = require('express');
const path = require('path');
const routes = require('./routes');
const configs = require('./config');
//const db = require('./config/database');
require('dotenv').config({ path: 'variables.env' });
const bodyParser = require('body-parser');
//Configurar Express
const app = express();

//Habilitar PUG
app.set('view engine', 'pug');

//Probando la BD
// db.authenticate()
//     .then(() => console.log('DB Conectada'))
//     .catch(error => console.log('Error: ' + error));

//Agregar las vistas
app.set('views', path.join(__dirname, './views'));

//Cargar una carpeta estatica llamada public
app.use(express.static('public'));

//Validar si estamos en desarrollo o en produccion
const config = configs[app.get('env')];

//Creamos la variable para el sitio web
app.locals.titulo = config.nombresitio;

//Muestra el año actual
app.use((req, res, next) => {
    //Crear una nueva fecha
    const fecha = new Date();
    res.locals.fechaActual = fecha.getFullYear();
    res.locals.ruta = req.path; //req.path me muestra la ruta actual
    return next(); //Next pertenece al Middleware
});
//Ejecutamos el boyd-parser
app.use(bodyParser.urlencoded({ extended: true }));

//Cargar las rutas
app.use('/', routes());

/*Puerto y host para la app*/
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;
app.listen(port, host), () => {
    console.log("El servidor esta funcionando")
};