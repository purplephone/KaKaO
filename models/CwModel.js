var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// 게시판 스키마
var cwSchema = new Schema({
    id : String, //학번
    title: String, // 제목
    write: String, // 내용
    pass: String, // 비밀번호
    type: String, // 종류
    pro: String, // 교수님
    sub: String // 과목
});

module.exports = mongoose.model('cw', cwSchema);
//
