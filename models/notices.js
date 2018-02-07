const mongoose = require('mongoose');

const noticesSchema = mongoose.Schema({
    title:{
        type: String,
        require: true
    },
    notice:{
        type: String,
        require: true
    },
    author:{
        type: String,
        require: true
    },
    date:{
        type: String,
        require: true
    },
    time:{
        type: String,
        require: true
    }
});

const notices = module.exports = mongoose.model('Notice',noticesSchema);

module.exports.addNotice = function(notice, callback){
    notice.save(callback);
}

module.exports.getNotices = function(callback){
    notices.find({},callback);
}