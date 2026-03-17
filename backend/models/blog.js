const mongoose = require('mongoose');

const sectionSchema = new mongoose.Schema({
    id: String,
    title: String,
    content: String
});

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: false, // Make it optional since it's not in the current Addblog form
        enum: ['Automation', 'AI', 'Design', 'Strategy']
    },
     media: {
        type: String, // URL of image or video
    },
    mediaType: {
        type: String,
        enum: ['image', 'video', null],
        default: null
    },
       author: {
        type: String,
        default: 'Escapeloop Team'
    },
    tocTitle: {
        type: String,
        default: 'Table of Contents'
    },
    sections: [sectionSchema],
    tags: [String],
}, {
    timestamps: true
});

module.exports = mongoose.model('Blog', blogSchema);
