const mongoose = require('mongoose')
// Schema在数据表中描述表的字段
let personSchema = new mongoose.Schema({
    name:String,
    age:Number
})
module.exports = mongoose.model('Person',personSchema)