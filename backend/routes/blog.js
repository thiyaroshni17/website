const express = require('express');
const router = express.Router();
const blogController = require('../controller/blogController.js');

// Create Blog
router.post('/create', blogController.createBlog);

// Get All Blogs
router.get('/all', blogController.getAllBlogs);

// Get Single Blog
router.get('/:id', blogController.getBlogById);

// Update Blog
router.put('/update/:id', blogController.updateBlog);

// Delete Blog
router.delete('/delete/:id', blogController.deleteBlog);

module.exports = router;