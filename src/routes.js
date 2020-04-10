/*
Здесь расположены пути
 */

var controller404 = require('./controllers/404.js');
var controller500 = require('./controllers/500.js');
var controllerEntities = require('./controllers/entities.js');
 
module.exports = function (web) {
    //главная страница
    
    web.get('/actual-entities', controllerEntities.getActualEntities);
    web.get('/entity/:id', controllerEntities.getEntityById);
    web.get('/entity/:id/:date', controllerEntities.getEntityByIdAfterDate);
    web.use(controller404.index);
    web.use(controller500.index);
};

