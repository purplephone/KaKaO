var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//
var dataSchema = new Schema({
    _id: String, //학번
    date: String, //생성 날짜
    tdate: String, //시간표
    subname: String //시간표 이름
});

module.exports = mongoose.model('data', dataSchema);
