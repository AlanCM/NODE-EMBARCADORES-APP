var mongoose = require('mongoose');
 
var TemporadaSchema = new mongoose.Schema({
    CodigoTemporada: {
        type: Number
    },
    NombreTemporada:{
    	type:string
    },
    CodigoAgricultor:{
        type:Number
    }
 
}, {
    timestamps: true
});
 
module.exports = mongoose.model('Temporada', TemporadaSchema);