const express = require('express');
const router = express.Router();
const blogController = require('../Controllers/blogController');

router.get('/addPost', (req, res) => {
    res.send('posts');
}) ;
router.post('/addPost', blogController.add_post);

module.exports = router;