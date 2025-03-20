const express = require('express');
const userController = require('../controllers/userController');
const postController = require('../controllers/postController');

const router = express.Router();

router.get('/users', userController.getTopUsers);
router.get('/posts', postController.getTopOrLatestPosts);

module.exports = router;