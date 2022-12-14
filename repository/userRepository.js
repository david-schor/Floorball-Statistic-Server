require('dotenv').config()
const nano = require('nano')(process.env.DBURL)
const db = nano.use('user')

class userRepository {
    static addUser(user) {
        return new Promise((resolve, reject) => {
            db.insert({username: user.username, created: user.created}, function(err, data) {
                if(err) return reject(err);
                resolve(data.id);
            });
        });
    }

    static deleteUser(id) {
        return new Promise((resolve, reject) => {
            db.destroy(id, function(err, data) {
                if(err) return reject(err);
                resolve(data);
            });
        });
    }

    static findUserById(id) {
        return new Promise((resolve, reject) => {
            db.get(id, function(err, data) {
                if(err) return reject(err);
                resolve(data);
            });
        });
    }
}

module.exports = userRepository