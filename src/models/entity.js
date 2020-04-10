var mongoose = require('mongoose');
var config = require('../config.json');
mongoose.connect(config.mongo_connection_string, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const Schema = mongoose.Schema;

const entityShema = new Schema({
    id: { type: String },
    date: { type: Date, default: Date.now },
    parameter1: { type: Number },
    parameter2: { type: Number },
    parameter3: { type: Number },
    parameter4: { type: Number },
    parameter5: { type: Number },
    parameter6: { type: Number },
    parameter7: { type: Number },
    parameter8: { type: Number },
    parameter9: { type: Number },
    parameter10: { type: Number },
    parameter11: { type: Number },
    parameter12: { type: Number },
    parameter13: { type: Number },
    parameter14: { type: Number },
    parameter15: { type: Number },
    parameter16: { type: Number },
    parameter17: { type: Number },
    parameter18: { type: Number },
    parameter19: { type: Number },
    parameter20: { type: Number }
});

module.exports = mongoose.model('Entity', entityShema);