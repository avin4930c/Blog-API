const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    body: { type: String, required: true },
    published: { type: Boolean, default: false },
    time_read: { type: Number, default: 0 },
    time_stamp: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Post', postSchema);