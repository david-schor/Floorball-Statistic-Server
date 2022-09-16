const Schema = require('nano-schema')

function User(username, created, last_login) {
  this.username = username
  this.created = created
  this.last_login = last_login
}

function validateUser(user) {
    user = new Schema({
        username: {
            type: String,
            required: true,
        },
        created: {
            type: Date,
            required: true,
        },
        last_login: {
            type: Date,
        }
    });
}

module.exports = {
  User: User,
  validateUser: validateUser,
};

