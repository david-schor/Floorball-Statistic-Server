class Session {
    constructor(userId, token, added) {
        this.userId = userId;
        this.token = token;
        this.added = added;
    }
}

module.exports = Session