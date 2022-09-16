const nano = require('nano')('http://admin:Enzian2000@192.168.0.28:5984')
const db = nano.use('user')
const update = require('../util/update')

    function findUserByName(username) {
        db.get({username: username})
    }

    function findUserById(id) {

        db.get(id, (err, data) => {
          if (err) {
            console.log(err);
          } else {
            console.log(data);
          }
        });

        //var test = db.get(id)
        //console.log(test)
    }

    function addUser(user) {
        db.insert({username: user.username, created: user.created})
    }

    function updateLoginTime(userId, time) {
        //https://stackoverflow.com/questions/11662496/updating-a-couchdb-document-in-nano
    }

module.exports = {
  addUser: addUser,
  findUserById: findUserById,
};