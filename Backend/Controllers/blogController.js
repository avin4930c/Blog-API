const asyncHandler = require('express-async-handler');
const Blog = require('../models/blog');

exports.add_post = asyncHandler(async (req, res) => {
    try {
    const {title, category, desc, content, imgUrl, published} = req.body;
    const blog = new Blog({
        user_id: req.user.id,
        title,
        category,
        desc,
        content,
        imgUrl,
        published: !published,
    });
    await blog.save();
    res.status(201).json({ message: 'Blog created successfully' });
} catch (error) {
    console.error('Error during blog creation:', error);
    res.status(500).json({ errors: [{ msg: 'Internal server error' }] });
}
});