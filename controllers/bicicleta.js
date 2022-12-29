var Bicicleta = require("../models/bicilceta")

exports.bicicleta_list = (req, res) => {
    res.render('bicicletas/index', { bicis: Bicicleta.allBicis })
}

exports.bicicleta_create_get = (req, res) => {
    res.render('bicicletas/create', { bicis: Bicicleta.allBicis })
}

exports.bicicleta_create_post = (req, res) => {
    var bici = new Bicicleta(req.body.id, req.body.color, req.body.modelo);
    bici.ubicacion = [req.body.lat, req.body.long];
    Bicicleta.add(bici);

    res.redirect('/bicicletas')
}

exports.bicicleta_delete_post = (req, res) => {
    Bicicleta.removeById(req.body.id)
    res.redirect('/bicicletas')
}

exports.bicicleta_update_get = (req, res) => {
    var bici = Bicicleta.findById(req.params.id)
    res.render('bicicletas/update', { bici })
}

exports.bicicleta_update_post = (req, res) => {
    var bici = Bicicleta.findById(req.params.id)
    bici.id = req.body.id;
    bici.modelo = req.body.modelo;
    bici.color = req.body.color;
    bici.ubicacion = [req.body.lat, req.body.long];

    res.redirect('/bicicletas')
}