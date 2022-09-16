const userService = require('../service/userService');

function signup(req, res) {
    userService.addUser(req)
    return res.json('User added: ' + req);
};

// for testing purpose only
function update(req, res) {
    userService.updateLoginTime(req.body.id)
};

module.exports = {
  signup: signup,
  update: update,
};
