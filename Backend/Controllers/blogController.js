const asyncHandler = require('express-async-handler');
const Blog = require('../models/blog');
const Comment = require('../models/comment');

exports.add_post = asyncHandler(async (req, res) => {
    try {
    const {title, time_read, category, desc, content, imgUrl, published} = req.body;
    const blog = new Blog({
        user_id: req.user.id,
        title,
        time_read,
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

exports.get_published_blogs = asyncHandler(async (req, res) => {
    try {
        const blogs = await Blog.find({ published: true});
        res.status(200).json(blogs);
    } catch (error) {
        console.error('Error fetching published blogs:', error);
        res.status(500).json({ errors: [{ msg: 'Internal server error' }] });
    }
});

exports.get_blog =  asyncHandler(async (req, res) => {
    console.log('Fetching blog:', req.params.id);
    try {
        const blog = await Blog.findOne({_id: req.params.id}).populate('user_id');
        res.status(200).json(blog);
    } catch (error) {
        console.error('Error fetching blog:', error);
        res.status(500).json({ errors: [{ msg: 'Internal server error' }] });
    }
});

exports.add_comment = asyncHandler(async (req, res) => {
    try {
        const { commentText } = req.body;
        const blogId = req.params.id;
        const comment = new Comment({
            blog_id: blogId,
            user_id: req.user.id,
            commentText,
        });
        await comment.save();
    } catch (error) {
        console.error('Error during comment creation:', error);
        res.status(500).json({ errors: [{ msg: 'Internal server error' }] });
    }
});

exports.get_comments = asyncHandler(async (req, res) => {
    try {
        const blogId = req.params.id;
        let comments = await Comment.find({ blog_id: blogId }).populate('user_id');
        res.status(200).json(comments);
    } catch (error) {
        console.error('Error fetching comments:', error);
        res.status(500).json({ errors: [{ msg: 'Internal server error' }] });
    }
});