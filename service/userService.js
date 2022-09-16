const userRepository = require('../repository/userRepository')

    function addUser(user) {
        return new Promise((res, rej) => {
            //check password with JWTUtil


            //userVal.validate(user).catch(rej)

            userRepository.addUser(user)

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
