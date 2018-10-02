var mongoose = require('mongoose');
 
var TemporadaSchema = new mongoose.Schema({
    CodigoTemporada: {
        type: Number
    },
    NombreTemporada:{
    	type:String
    },
    CodigoAgricultor:{
        type:Number
    }
 
}, {
    timestamps: true
});
 
module.exports = mongoose.model('Temporada', TemporadaSchema);