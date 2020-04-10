var entity = require('../models/entity.js');

module.exports.getActualEntities = function (req, res) {
    entity.getActualEntities(function(entities){
        res.send(entities);
    })
};

module.exports.getEntityById = function (req, res) {
    entity.getEntityById(req.params.id, function(entities){
        res.send(entities);
    })
};
