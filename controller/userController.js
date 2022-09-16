const User = require('../entity/user');
const userService = require('../service/userService');

function signup(req, res) {
    const user = new User.User(req.body.username, Date.now(), null)
    userService.addUser(user)
    return res.json('done the job');
};

// for testing purpose only
function update(req, res) {
    userService.updateLoginTime(req.body.id)
};

module.exports = {
  signup: signup,
  update: update,
};
