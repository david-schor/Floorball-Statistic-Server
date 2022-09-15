const Schema = require('nano-schema')

const userSession = new Schema({
    userId: {
        type: Number,
        required: true,
    },
    token: {
        type: String,
        required: true,
    },
    added: {
        type: Date,
        required: true,
    },
    last_seen: {
        type: Date,
        required: true,
    }
});

module.exports = userSession