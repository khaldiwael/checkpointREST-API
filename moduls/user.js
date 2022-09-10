
const {Schema, model} = require('mongoose')



// const Schema = mongoose.Schema

const userSchema =new Schema({
    firstName:String,
    lastName:String,
    age:Number,
    phone:Number,
    dateBirth:Date
},{collection:'cantacts'})

module.exports = user = model('users',userSchema)