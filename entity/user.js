const Schema = require('nano-schema')

const user = new Schema({
    username: {
        type: String,
        required: true,
    },
    created: {
        type: Date,
        required: true,
    },
    last_login: {
        type: Date,
        required: true,
    }
});

module.exports = user