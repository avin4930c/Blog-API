const express = require('express');
const router = express.Router();
const authenticateJWT = require('../jwtAuth');
const blogController = require('../Controllers/blogController');

router.get('/addPost', (req, res) => {
    res.send('posts');
});

router.post('/addPost', authenticateJWT, blogController.add_post);

router.get('/published', blogController.get_published_blogs);

router.get('/:id', blogController.get_blog);

router.get('/:id/comments', blogController.get_comments);

router.post('/:id/comments', authenticateJWT, blogController.add_comment);

module.exports = router;