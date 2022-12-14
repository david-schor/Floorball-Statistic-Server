require('dotenv').config()
const nano = require('nano')(process.env.DBURL)
const db = nano.use('password')

class userRepository {
    static addPassword(password) {
        return new Promise((resolve, reject) => {
            db.insert({userId: password.userId, password: password.password}, function(err, data) {
                if(err) return reject(err);
                resolve(data.id);
            });
        });
    }

    static findPasswordByUser(userId) {
        return new Promise((resolve, reject) => {
            // TODO: create view in couchdb
            db.view('designname', 'viewname', {key: userId}, function(err, data) {
                if(err) return reject(err);
                resolve(data);
            });
        });
    }
}

module.exports = userRepository