const use = 'user'
const nano = require('nano')('')
const db = nano.use(use)
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

    }

    function addUser(user, callback) {
        db.insert({username: user.username, created: user.created}, function(err,data){
            return callback(data.id)
         });
    }

    function updateLoginTime(userId, time) {
        // 1. get ID from doc
        // 2. update this doc
        update.db({ username: 'hat gefunkt' }, id, use)
    }


module.exports = {
  addUser: addUser,
  findUserById: findUserById,
};