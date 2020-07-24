const Viaje = require('../modelos/Viajes');
exports.mostrarViajes = async(req, res) => {
    const viajes = await Viaje.findAll();
    res.render('viajes', {
        pagina: 'Próximos Viajes',
        viajes
    });
}
exports.mostrarViaje = async(req, res) => {
    //Viaje.findOne({ where: { id: req.params.id } }) Tambien se puede hacer con esta forma.
    //Sin async await. Ejemplo. then porque devuelve un promise
    // Viaje.findByPk(req.params.id)
    //     .then((viaje) => {
    //         //console.log(viaje);
    //         res.render('viaje', {
    //             viaje: viaje
    //         });
    //     })
    //     .catch(error => console.log(error));
    //Con asyn await. El performance es mejor, ya que le da chance a JS de hacer otras cosas mientras espera los datos.
    const viaje = await Viaje.findByPk(req.params.id);
    res.render('viaje', {
        viaje
    });
}