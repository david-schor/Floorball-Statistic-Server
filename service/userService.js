const User = require('../entity/user');
const Password = require('../entity/password');
const userRepository = require('../repository/userRepository')
const passwordRepository = require('../repository/passwordRepository')

    function addUser(req) {
        return new Promise((res, rej) => {
            //check password with JWTUtil
            const user = new User.User(req.body.username, Date.now(), null)
            userRepository.addUser(user, function(data){
                const password = new Password.Password(data, req.body.password, Date.now())
                passwordRepository.addPassword(password)
            });


        });
    }

    function updateLoginTime(id) {
        return new Promise((res, rej) => {
            console.log(id)
            userRepository.findUserById(id)

            //userRepository.updateLoginTime(user)
        });
    }

module.exports = {
  addUser: addUser,
  updateLoginTime: updateLoginTime,
};
