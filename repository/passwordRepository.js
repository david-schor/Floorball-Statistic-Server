const nano = require('nano')('')
const db = nano.use('password')

function addPassword(password) {
        db.insert({userId: password.userId, password: password.password, created: password.created})
    }


module.exports = {
  addPassword: addPassword,
};