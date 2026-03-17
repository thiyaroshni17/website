const Blog = require('../models/blog.js');

// Create a new blog
exports.createBlog = async (req, res) => {
    try {
        const { title, tocTitle, sections, media, mediaType, category, author, tags } = req.body;
        
        const newBlog = new Blog({
            title,
            tocTitle,
            sections,
            media,
            mediaType,
            category,
            author,
            tags
        });

        await newBlog.save();
        res.status(201).json({ message: 'Blog created successfully', blog: newBlog });
    } catch (error) {
        res.status(500).json({ message: 'Error creating blog', error: error.message });
    }
};

// Get all blogs
exports.getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find().sort({ createdAt: -1 });
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching blogs', error: error.message });
    }
};

// Get single blog by ID
exports.getBlogById = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching blog', error: error.message });
    }
};

// Update blog
exports.updateBlog = async (req, res) => {
    try {
        const { title, tocTitle, sections, media, mediaType, category, author, tags } = req.body;
        
        const updateData = {
            title,
            tocTitle,
            sections,
            media,
            mediaType,
            category,
            author,
            tags
        };

        const updatedBlog = await Blog.findByIdAndUpdate(
            req.params.id, 
            updateData, 
            { new: true, runValidators: true }
        );

        if (!updatedBlog) {
            return res.status(404).json({ message: 'Blog not found' });
        }

        res.status(200).json({ message: 'Blog updated successfully', blog: updatedBlog });
    } catch (error) {
        res.status(500).json({ message: 'Error updating blog', error: error.message });
    }
};

// Delete blog
exports.deleteBlog = async (req, res) => {
    try {
        const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
        if (!deletedBlog) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        res.status(200).json({ message: 'Blog deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting blog', error: error.message });
    }
};
