const Schema = require('nano-schema')

const password = new Schema({
    userId: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    created: {
        type: Date,
        required: true,
    }
});

module.exports = password