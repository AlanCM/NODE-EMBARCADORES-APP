var express  = require('express');
var app      = express();
var mongoose = require('mongoose');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors'); // CORS Issue
 
var databaseConfig = require('./config/database');
var router = require('./app/routes');
 
mongoose.connect(databaseConfig.url);
 
app.listen(process.env.PORT || 5000);
console.log("App listening on port 5000");
 
app.use(bodyParser.urlencoded({ extended: false })); // Parses urlencoded bodies
app.use(bodyParser.json()); // Send JSON responses
app.use(logger('dev')); // Log requests to API using morgan
app.use(cors());
 
router(app);

/*
In the code above we are using express to generate a new server, and we assign a reference to that server object to app. We import our configuration options for the database and the routes for our application which we will set up later.
We then connect to our MongoDB database by using mongoose.connect. We will specify the link to this database later in the config file. Once we have connected to the database, we set up our server to listen on either process.env.PORT or port 8080. In order for the server to work with Heroku, we must specify process.env.PORT but by also adding a second option of 8080 it will also allow you to run the server locally with Node.
Next, we set up our servers “middleware” using the app.use method. Here we set up bodyParser and logging with morgan which we installed as dependencies earlier. We also add the cors package so that we don’t get CORS errors when running the application locally.
*/