import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Upload, X, Plus, Trash2, ArrowLeft, Image as ImageIcon, Video, BookOpen, Layers } from 'lucide-react';
import '../styles/Addblog.css';

const Addblog = () => {
    const [title, setTitle] = useState('');
    const [tocTitle, setTocTitle] = useState('Table of Contents');
    const [sections, setSections] = useState([
        { id: 'sec-1', title: 'Introduction', content: 'Escapeloop is redefining the digital landscape by merging AI-driven automation with premium user experiences...' },
        { id: 'sec-2', title: 'The Core Concept', content: 'Our approach focuses on identifying the operational loops that hold businesses back...' },
        { id: 'sec-3', title: 'Future Horizons', content: 'The next phase of our journey involves deeper integration with generative models...' }
    ]);
    const [media, setMedia] = useState(null);
    const [mediaType, setMediaType] = useState(null);
    const [category, setCategory] = useState('Automation');
    const [author, setAuthor] = useState('Escapeloop Team');
    const [tags, setTags] = useState('');
    const fileInputRef = useRef(null);

    const handleMediaChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setMedia(reader.result);
                setMediaType(file.type.startsWith('video') ? 'video' : 'image');
            };
            reader.readAsDataURL(file);
        }
    };

    const addSection = () => {
        const newId = `sec-${sections.length + 1}`;
        setSections([...sections, { id: newId, title: '', content: '' }]);
    };

    const removeSection = (index) => {
        const newSections = sections.filter((_, i) => i !== index);
        setSections(newSections);
    };

    const updateSection = (index, field, value) => {
        const newSections = [...sections];
        newSections[index][field] = value;
        setSections(newSections);
    };

    const triggerFileInput = () => {
        fileInputRef.current.click();
    };

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handlePublish = async () => {
        try {
            const blogData = {
                title,
                tocTitle,
                sections,
                media, // In a real app, you'd upload this to a storage service first
                mediaType,
                category,
                author,
                tags: tags.split(',').map(tag => tag.trim()).filter(tag => tag !== '')
            };

            const response = await axios.post('http://localhost:5000/escapeloop/create', blogData);
            
            if (response.status === 201) {
                alert('Blog post published successfully!');
                console.log('Server Response:', response.data);
                // Optionally redirect or clear form
            }
        } catch (error) {
            console.error('Error publishing blog:', error);
            alert(`Failed to publish blog: ${error.response?.data?.message || error.message}`);
        }
    };

    return (
        <div className="add-blog-page">
            <div className="add-blog-container">
                <div className="blog-editor">
                    <Link to="/blog" className="back-link" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#666', textDecoration: 'none', marginBottom: '24px', fontSize: '0.9rem', fontWeight: '600' }}>
                        <ArrowLeft size={16} /> Back to Blog
                    </Link>
                    <h2 className="editor-title">Create New Article</h2>
                    
                    <div className="form-group">
                        <label>Hero Media</label>
                        <div className="media-upload-zone" onClick={triggerFileInput}>
                            {media ? (
                                mediaType === 'image' ? (
                                    <img src={media} alt="Preview" style={{ width: '100%', borderRadius: '12px' }} />
                                ) : (
                                    <video src={media} style={{ width: '100%', borderRadius: '12px' }} controls />
                                )
                            ) : (
                                <>
                                    <Upload className="upload-icon" size={32} />
                                    <p className="upload-text">Upload Feature Image or Video</p>
                                    <p style={{ fontSize: '0.75rem', color: '#999', marginTop: '8px' }}>High resolution 16:9 recommended</p>
                                </>
                            )}
                            <input 
                                type="file" 
                                ref={fileInputRef}
                                className="hidden-input" 
                                accept="image/*,video/*"
                                onChange={handleMediaChange}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Main Title</label>
                        <input 
                            type="text" 
                            className="premium-input" 
                            placeholder="Enter the main headline..."
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label>TOC Sidebar Title</label>
                        <input 
                            type="text" 
                            className="premium-input" 
                            placeholder="e.g., Table of Contents"
                            value={tocTitle}
                            onChange={(e) => setTocTitle(e.target.value)}
                        />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                        <div className="form-group">
                            <label>Category</label>
                            <select 
                                className="premium-input" 
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                style={{ appearance: 'none', background: 'transparent' }}
                            >
                                <option value="Automation">Automation</option>
                                <option value="AI">AI</option>
                                <option value="Design">Design</option>
                                <option value="Strategy">Strategy</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Author</label>
                            <input 
                                type="text" 
                                className="premium-input" 
                                placeholder="Author Name"
                                value={author}
                                onChange={(e) => setAuthor(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Tags (Comma separated)</label>
                        <input 
                            type="text" 
                            className="premium-input" 
                            placeholder="e.g., AI, Future, SaaS"
                            value={tags}
                            onChange={(e) => setTags(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <Layers size={16} /> Article Sections
                        </label>
                        <div className="sections-list">
                            {sections.map((section, index) => (
                                <div key={section.id} className="section-block">
                                    <div className="section-header">
                                        <div className="section-number">{index + 1}</div>
                                        <button className="remove-btn" onClick={() => removeSection(index)}>
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                    <input 
                                        type="text" 
                                        className="premium-input" 
                                        style={{ marginBottom: '1rem' }}
                                        placeholder="Section Title"
                                        value={section.title}
                                        onChange={(e) => updateSection(index, 'title', e.target.value)}
                                    />
                                    <textarea 
                                        className="premium-input premium-textarea" 
                                        placeholder="Section Description (Supports long-form content)..."
                                        value={section.content}
                                        onChange={(e) => updateSection(index, 'content', e.target.value)}
                                    ></textarea>
                                </div>
                            ))}
                        </div>
                        <button className="add-section-btn" onClick={addSection}>
                            <Plus size={18} /> Add New Section
                        </button>
                    </div>

                    <div className="publish-actions">
                        <button className="publish-btn" onClick={handlePublish}>
                            Publish Blog Post
                        </button>
                    </div>
                </div>

                <div className="blog-preview">
                    <div className="preview-card">
                        <div className="preview-media">
                            {media ? (
                                mediaType === 'image' ? (
                                    <img src={media} alt="Preview" />
                                ) : (
                                    <video src={media} autoPlay muted loop />
                                )
                            ) : (
                                <div className="placeholder-media">
                                    <ImageIcon size={48} color="#ccc" />
                                    <span style={{ color: '#999', marginTop: '1rem' }}>Feature Preview</span>
                                </div>
                            )}
                        </div>
                        <div className="preview-content">
                            <h1 className="preview-title">{title || "The Evolution of Digital Architecture"}</h1>
                            
                            <div className="preview-toc">
                                <h3 className="preview-toc-title">{tocTitle}</h3>
                                <ul className="preview-toc-list">
                                    {sections.map((section, index) => (
                                        <li key={section.id}>
                                            <a 
                                                href={`#${section.id}`} 
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    scrollToSection(section.id);
                                                }}
                                            >
                                                {section.title || `Section ${index + 1}`}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="preview-body">
                                {sections.map((section, index) => (
                                    <div key={section.id} id={section.id} className="preview-section">
                                        <h2 className="section-title">{section.title || `Untitled Section ${index + 1}`}</h2>
                                        <div className="section-body">
                                            {section.content || "Start typing your section content in the editor to see it appear here..."}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {sections.length === 0 && (
                                <div style={{ textAlign: 'center', padding: '3rem', color: '#999' }}>
                                    <BookOpen size={48} style={{ marginBottom: '1rem', opacity: 0.3 }} />
                                    <p>Add sections in the editor to build your story.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Addblog;
