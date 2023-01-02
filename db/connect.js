let db= require('mongoose')

function connectDb(url) {
    return db.connect(url);
    
}

module.exports = connectDb;