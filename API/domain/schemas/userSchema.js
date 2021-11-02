const bdd = require('../data/dbconnect');
const mongoose = require('mongoose');
const schema = mongoose.Schema;

const UserSchema = new schema({
    name:{type:String},
    firstname:{type:String},
    email:{type:String},
})

const UserModel = mongoose.model('users', UserSchema)

module.exports = UserModel;