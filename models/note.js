const mongoose = require('mongoose')
const Schema = require('mongoose').Schema;

const noteSchema = new Schema({
    content: { type: String, required: true},
    user: {
        type: Schema.Types.ObjectId,
        ref:'User',
    }
},{
    timestamps: true
});

module.exports = mongoose.model('Note', noteSchema);