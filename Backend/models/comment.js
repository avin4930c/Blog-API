const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    post_id: { type: Schema.Types.ObjectId, ref: 'Post', required: true },
    username: { type: String, required: true },
    body: { type: String, required: true },
    time_stamp: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Comment', commentSchema);