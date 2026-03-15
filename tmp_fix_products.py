filepath = r'c:\Users\User\Desktop\website\frontend\src\pages\Products.jsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Find the contact section
contact_start = content.find('<section className="contact-section white-bg" id="contact">')
social_marker = '<div className="ct-social-connect">'
social_idx = content.find(social_marker, contact_start)
section_end_idx = content.find('</section>', social_idx) + len('</section>')

# Find where the contact-wrapper opened
wrapper_start = content.rfind('<div className="contact-wrapper">', 0, social_idx)

# The old text that includes everything from social block to section end
old_block = content[social_idx:section_end_idx]

form_and_social = '''<div className="contact-form-card">
                        <form className="contact-form">
                            <div className="form-group"><input type="text" placeholder="Name" /></div>
                            <div className="form-group"><input type="tel" placeholder="Mobile Number" /></div>
                            <div className="form-group"><input type="email" placeholder="Email" /></div>
                            <div className="form-group"><textarea rows="4" placeholder="Tell us about your project..."></textarea></div>
                            <button type="submit" className="contact-submit-btn">Send Message</button>
                        </form>
                    </div>
                </div>

                <div className="ct-social-connect">
                    <h3>Follow Our Journey</h3>
                    <div className="ct-social-links">
                        <a href="https://instagram.com/escapeloop" target="_blank" rel="noopener noreferrer" className="ct-social-btn instagram">
                            <Instagram size={20} />
                            <span>escapeloop.ai</span>
                        </a>
                        <a href="https://linkedin.com/company/escapeloop" target="_blank" rel="noopener noreferrer" className="ct-social-btn linkedin">
                            <Linkedin size={20} />
                            <span>escapeloop</span>
                        </a>
                        <a href="https://facebook.com/escapeloop" target="_blank" rel="noopener noreferrer" className="ct-social-btn facebook">
                            <Facebook size={20} />
                            <span>escapeloop</span>
                        </a>
                    </div>
                </div>
            </section>'''

# We need the preamble before social to also close contact-details and contact-items properly
# Currently the pre-social content has stray divs - find what precedes social_idx and clean it
pre_social = content[wrapper_start:social_idx]
# Count open vs closed divs to figure out extra closing divs needed
opens = pre_social.count('<div')
closes = pre_social.count('</div>')
extra_closes_before = closes - opens  # if positive, there are more closes than opens (stray closes)
print(f"Opens: {opens}, Closes: {closes}, Extra closes: {extra_closes_before}")
print(f"Pre-social tail: {repr(pre_social[-300:])}")
print(f"Old block: {repr(old_block[:200])}")
