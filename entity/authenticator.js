const Schema = require('nano-schema')

const authenticator = new Schema({
    userId: {
        type: Number,
        required: true,
    },
    label: {
        type: String,
        required: true,
    },
    handle: {
        type: Date,
        required: true,
    },
    counter: {
        type: Number,
        required: true,
    },
    publicKey: {
        type: String,
        required: true,
    },
    auth_type: {
        type: String,
        required: true,
    },
});

module.exports = authenticator