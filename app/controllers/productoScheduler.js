var http = require('http');
var MongoClient = require('mongodb').MongoClient;
// Base de datos
var url = process.env.MONGODB_URI;
var jsonStr = '';
var jProductos;
console.log('productos sync');
var fecha = 'FechaModificacion=20180316';
var options = {
    host: 'http://appembarcadores.tripleh.com.mx/Default.aspx/',
    path: 'api/Embarques?Catalogo=Producto' + fecha
};

callback = function(response){
    response.on('data',function(chunk){
        jsonStr += chunk;
    });

    response.on('end',function(){
        jProductos = JSON.parse(jsonStr);
        jsonStr = '';
        // insertar registros
        MongoClient.connect(url,function(err,db){
            console.log('conectando a db');
            var collection = db.collection('productos');
            collection.insertMany(jProductos,function(err,result){
                console.log('datos guardados!');
                db.close();
            });
        });
    });
}

http.request(options, callback).end();