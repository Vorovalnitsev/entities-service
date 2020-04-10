/*
Пути API
 */

var controller404 = require('./controllers/404.js');
var controller500 = require('./controllers/500.js');
var controllerEntities = require('./controllers/entities.js');
 
module.exports = function (web) {
    web.all("/*", function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
        res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
        next();
    });

    //Отдаст посление полученные Entities
    web.get('/actual-entities', controllerEntities.getActualEntities);
    //Отдаст все записи где ID сущности совпадает с переданным id
    web.get('/entity/:id', controllerEntities.getEntityById);

    //страницы ошибок 500 и 404
    web.use(controller404.index);
    web.use(controller500.index);
};

