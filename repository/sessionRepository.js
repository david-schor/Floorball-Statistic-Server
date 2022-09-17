require('dotenv').config()
const nano = require('nano')(process.env.DBURL)
const db = nano.use('session')

class sessionRepository {
    static createSession(session) {
        return new Promise((resolve, reject) => {
            db.insert({userId: session.userId, token: session.token, added: session.added}, function(err, data) {
                if(err) return reject(err);
                resolve(data.id);
            });
        });
    }

    static deleteSession(id) {
        return new Promise((resolve, reject) => {
            db.destroy(id, function(err, data) {
                if(err) return reject(err);
                resolve(data);
            });
        });
    }

    static validateSession(token) {
        return new Promise((resolve, reject) => {
            // TODO: create view in couchdb
            db.view('designname', 'viewname', {key: token}, function(err, data) {
                if(err) return reject(err);
                resolve(data);
            });
        });
    }
}

module.exports = sessionRepository