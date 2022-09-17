const userService = require('../service/userService');

class userController {
    static signup(req, res) {
        return userService.addUser(req).then(data => {
            res.json('User added with id: ' + data);
        }).catch(err => {
            res.send(err);
        });
    }
}

module.exports = userController