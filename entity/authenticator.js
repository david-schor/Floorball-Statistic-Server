class Authenticator {
    constructor(userId, label, handle, publicKey, auth_type) {
        this.userId = userId;
        this.label = label;
        this.handle = handle;
        this.publicKey = publicKey;
        this.auth_type = auth_type;
    }
}

module.exports = Authenticator