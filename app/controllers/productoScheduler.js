var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
// Base de datos
var url = process.env.MONGODB_URI;
var jsonStr = '';
var jProductos;
console.log('productos sync');
var fecha = 'FechaModificacion=20180316';
var options = {
    host: 'appembarcadores.tripleh.com.mx',
    path: '/Default.aspx/api/Embarques?Catalogo=Producto&FechaModificacion=20180316'
};

callback = function(response){
    response.on('data',function(chunk){
        jsonStr += chunk;
    });

    response.on('end',function(){
        jProductos = JSON.parse(jsonStr);
        //jsonStr = '';
        // insertar registros
        MongoClient.connect(url,function(err,client){
            console.log('conectando a db');
            var db = client.db('heroku_1nkkr2b2');
            var collection = db.collection('productos');
            collection.insertMany(jsonStr,function(err,result){
                assert.equal(err, null);
                console.log('datos guardados!');
                client.close();
                //mongodb://heroku_1nkkr2b2:ttl665upn2sio1fgcoajg6db1j@ds121163.mlab.com:21163/heroku_1nkkr2b2
            });
        });
    });
}

http.request(options, callback).end();