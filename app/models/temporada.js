var mongoose = require('mongoose');
 
var TemporadaSchema = new mongoose.Schema({
    CodigoTemporada: {
        type: number
    },
    NombreTemporada:{
    	type:string
    },
    CodigoAgricultor:{
        type:number
    }
 
}, {
    timestamps: true
});
 
module.exports = mongoose.model('Temporada', TemporadaSchema);