function User(username, created, last_login) {
  this.username = username
  this.created = created
  this.last_login = last_login
}

module.exports = {
  User: User,
};

