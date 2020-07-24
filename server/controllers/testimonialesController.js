const Testimonial = require('../modelos/Testimoniales');
exports.mostrarTestimoniales = async(req, res) => {
    const testimoniales = await Testimonial.findAll()
    res.render('testimoniales', {
        pagina: 'Testimoniales',
        testimoniales
    });
}
exports.agregarTestimonial = async(req, res) => {
    //Podemos ver el POST del formulario con body-parser
    //console.log(req.body);
    let { nombre, correo, mensaje } = req.body;
    let errores = [];
    if (!nombre) {
        errores.push({ 'mensaje': 'Agrega tu Nombre' });
    }
    if (!correo) {
        errores.push({ 'mensaje': 'Agrega tu correo' });
    }
    if (!mensaje) {
        errores.push({ 'mensaje': 'Agrega tu mensaje' });
    }
    //Revisar por los errores
    if (errores.length > 0) {
        //Muestra la vista con errores
        const testimoniales = await Testimonial.findAll()
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            nombre,
            correo,
            mensaje,
            errores,
            testimoniales

        });
    } else {
        //Almacenarlo en la BD
        Testimonial.create({
                nombre,
                correo,
                mensaje
            })
            .then(testimonial => res.redirect('/testimoniales'))
            .catch(error => console.log(error));
    }
}