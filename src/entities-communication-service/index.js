var entity = require('../models/entity.js').model;
var config = require('../config.json');

//функция генерирует случайную сущность
function getRandomEntitiyId(){
    return `Entity ${Math.floor(Math.random() * config.quantity_entities) + 1}`;
}

//функция генерирует случайное значение параметра
function getRandomParameter(){
    let sign = Math.random() > 0.5 ? 1 : -1;
    return sign * Math.random();
}
//функция добавлят каждую секунду в базу 10 новых сущностей
function addRecords(){
    for(let i = 0; i<=9; i++){
        let newEntity = new entity();
        newEntity.id = getRandomEntitiyId();
        for(let j = 1; j <= config.quantity_entities; j++){
            newEntity['parameter' + j] = getRandomParameter();
        }
        newEntity.save(function (err, entity) {
            if (err){
                console.log(err);
            }
          });
    }
}
setInterval(addRecords, 1000);

