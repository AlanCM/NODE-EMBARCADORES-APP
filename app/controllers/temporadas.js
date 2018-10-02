var Temporada = require('../models/temporada');
 // import temporada model
exports.getTemporada = function(req, res, next){
    Temporada.find(function(err, temporadas) {
        if (err){
         res.send(err);
        }
        res.json(temporadas);
    });
}