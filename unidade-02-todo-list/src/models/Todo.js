const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = Schema({
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: false,
    },
    finished: {
        type: Boolean,
        require: false,
        default: false
    },
    date: {
        type: Date,
        default: Date.now(),
    },

})

module.exports = Todo = mongoose.model("todos", todoSchema)