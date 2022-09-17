require('dotenv').config()
const nano = require('nano')(process.env.DBURL)
const db = nano.use('authenticator')

class authenticatorRepository {
    static addAuthenticator(authenticator) {
        return new Promise((resolve, reject) => {
            db.insert({userId: authenticator.userId, label: authenticator.label, handle: authenticator.handle, publicKey: authenticator.publicKey, auth_type: authenticator.auth_type}, function(err, data) {
                if(err) return reject(err);
                resolve(data.id);
            });
        });
    }

    static findAuthenticatorByUser(userId) {
        new Promise((resolve, reject) => {
            // TODO: create view in couchdb
            db.view('designname', 'viewname', {key: userId}, function(err, data) {
                if(err) return reject(err);
                resolve(data);
            });
        });
    }
}

module.exports = authenticatorRepository