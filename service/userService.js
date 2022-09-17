const User = require('../entity/user');
const Password = require('../entity/password');
const userRepository = require('../repository/userRepository')
const passwordRepository = require('../repository/passwordRepository')

    function getuser(req) {
    /*
        userRepository.findUserByName(req.body.username).then(user => {
            Console.log('got it')
        });

        */

        //userRepository.run();
    }

    function addUser(req) {
        const user = new User(req.body.username, Date.now());
        userRepository.addUser(user).then(data => {
            console.log(data)
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
  getuser: getuser,
};
