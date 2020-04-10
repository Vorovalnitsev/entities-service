var async = require('async');
var config = require('../config.json');
var entity = require('../models/entity.js');

var entititiesName = [];

for(let i=0; i<config.quantity_entities; i++){
    entititiesName.push(`Entity ${i + 1}`)      
}

module.exports.getActualEntities = function (req, res) {
    var actualEntities = [];
    async.eachSeries(entititiesName, function(entityId, callback){
            entity.findOne({id: entityId}, null, {sort: {date: -1}, }, function(err, entity){
                actualEntities.push(entity.date);
                callback();
            })
        },
        function(err) {
            if( err ) {
                console.log('A entity failed to process');
            } else {
                res.send(actualEntities);
            }
        }
    );  
};

module.exports.getEntityById = function (req, res) {
    let id = req.params.id;
    entity.find({id: id}, null, {sort: {date: -1}, }, function(err, entities){
        if (err){
            console.log(err);
        }
        res.send(entities);
    });
};

module.exports.getEntityByIdAfterDate = function (req, res) {
    let id = req.params.id;
    let date = req.params.date;
    entity.find({id: id, date: { $gt: date }}, null, {sort: {date: -1}, }, function(err, entities){
        if (err){
            console.log(err);
        }
        res.send(entities);
    });
};
