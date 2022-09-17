const User = require('../entity/user');
const Password = require('../entity/password');
const userRepository = require('../repository/userRepository')
const passwordRepository = require('../repository/passwordRepository')

class userService {
    static addUser(req) {
        return new Promise((resolve, reject) => {
            const user = new User(req.body.username, Date.now());
            userRepository.addUser(user, function(err, data) {
                if(err) return reject(err);
            }).then(data => {
                const password = new Password(data, req.body.password);
                passwordRepository.addPassword(password, function(err, data) {
                    if(err) return reject(err);
                });
                resolve(data);
            });
        });
    }
}

module.exports = userService