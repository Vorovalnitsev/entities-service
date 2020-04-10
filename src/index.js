var express = require('express');
var bodyParser = require('body-parser');
var routesIndex = require('./routes.js');
var config = require('./config.json');
var entitiesCommunicationService = require('./entities-communication-service/index.js');

const web = express();

web.use(bodyParser.urlencoded({extended: false}));

//статические пути
web.use('/', express.static(__dirname + '/index-page'));
web.use('/css', express.static(__dirname + '/css')); 

routesIndex(web);

web.listen(config.service, function () {
    let date = new Date();
    console.log(date + ' Shop Web server is started on ' +
        'http://' + config.service.hostname +':' + config.service.port +
        ' Press Ctrl + C for stop.');
});