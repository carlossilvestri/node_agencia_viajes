const Viaje = require('../modelos/Viajes');
const Testimonial = require('../modelos/Testimoniales');
exports.consultasHomePage = async(req, res) => {
    //Como se van a hacer dos consultas, se necita un arreglo de promises
    //Agregar las consultas
    const viajes = await Viaje.findAll({ limit: 3 });

    const testimoniales = await Testimonial.findAll({ limit: 3 });

    res.render('index', {
        pagina: 'Próximos Viajes',
        viajes,
        testimoniales,
        clase: 'home'
    });
}