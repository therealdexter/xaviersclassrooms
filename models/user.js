const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const classroomSchema = mongoose.Schema({
    name:{
        type: String
    },
    email:{
        type: String,
        require: true
    },
    uid:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    },
    isTeacher:{
        type: Boolean,
        require: true
    },
    inbox: [],

    outbox: []
});

const classRoom = module.exports = mongoose.model('Classroom',classroomSchema);

module.exports.getPersonById = function(id,callback){
 
    classRoom.findById(id,callback);
}

module.exports.getPersonByUID = function(uid, callback){
    const query = {uid: uid};
    classRoom.findOne(query, callback);
}

module.exports.insertMessageIntoInbox = function(message,callback){
    const queryr = {uid: message.uidr};
    classRoom.findOneAndUpdate(queryr,{$push: {inbox: message}}, callback);
}

module.exports.insertMessageIntoOutBox = function(message,callback){
    const querys = {uid: message.uids};
    classRoom.findOneAndUpdate(querys,{$push: {outbox: message}}, callback);
}

module.exports.addUser = function(newUser, callback){
    //We first encrypt the password
    //genSalt generates a random key that can be used to encrypt the password
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err,hash)=>{
            if (err) throw err;
            newUser.password = hash;
            newUser.save(callback);
        });
    });
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
    bcrypt.compare(candidatePassword,hash,(err,isMatch)=>{
        if (err) throw err;
        callback(null,isMatch);
    });
}