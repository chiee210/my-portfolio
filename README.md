# Sam Reglos - Professional Portfolio

## Project Overview
This is a professional technology-themed portfolio website featuring modal pop-ups for each section. The design includes modern animations, glassmorphism effects, and a clean, responsive layout.

## Features
✅ **Responsive Design** - Works on all devices (desktop, tablet, mobile)
✅ **Modal Pop-ups** - Each section opens in an elegant modal dialog
✅ **Technology Theme** - Modern gradient colors and animations
✅ **Smooth Animations** - Professional transitions and effects
✅ **Accessibility** - Keyboard shortcuts (ESC to close modal)
✅ **Professional Layout** - Clean, organized sections with proper spacing

## Project Structure
```
my portfolio/
├── index.html          # Main HTML file
├── style.css           # CSS styling and animations
├── script.js           # JavaScript for modal functionality
├── profile.jpg         # Your 2x2 profile picture (TO BE ADDED)
└── README.md           # This file
```

## How to Use

### 1. Add Your Profile Picture
1. Prepare your **2x2 formal or semi-formal photo** in any of these formats:
   - `.jpg` (recommended)
   - `.png`
   - `.webp`

2. Name the file: `profile.jpg` (or update the filename in `index.html` if different)

3. Place it in the same folder as `index.html`

4. If using a different filename, update line 30 in `index.html`:
   ```html
   <img id="profileImage" src="YOUR_FILENAME.jpg" alt="Sam Reglos" class="profile-image">
   ```

### 2. Open in Browser
1. Right-click on `index.html`
2. Select "Open with" → Your preferred browser
3. Or drag `index.html` into your browser window

### 3. Interacting with the Portfolio
- **Main Page**: Features the profile section with your photo and title
- **Explore Buttons**: Click any "View Details" button to open a modal
- **Close Modal**: 
  - Click the ✕ button in the top right
  - Click outside the modal
  - Press ESC key
- **Navigation**: Use the top menu to navigate between sections

## Sections Included

### 1. **Profile** (Hero Section)
- Your name and title
- Your profile picture (2x2 format)
- Your institution

### 2. **About Me** (Modal)
- Background information
- Your interests and passion for technology
- Course and school details

### 3. **Personal Details** (Modal)
- Full name, age, and email
- Contact number
- Location
- All formatted in an easy-to-read layout

### 4. **Skills & Programming Languages** (Modal)
- HTML (Beginner)
- CSS (Beginner)
- JavaScript (Basic Knowledge)
- Python (Basic Knowledge)
- Each with skill bars and descriptions

### 5. **My Inspiration** (Modal)
- Why you chose IT
- Your motivation for programming
- Your career goals

## Color Scheme (Technology Theme)
- **Primary Blue**: `#0066ff` - Main accent color
- **Cyan**: `#00d4ff` - Secondary accent
- **Neon Green**: `#00ff88` - Success/highlight color
- **Dark Background**: `#0a0e27` - Main background
- **Cards**: `#1a1f3a` - Card background with slight transparency

## Browser Compatibility
✅ Chrome/Chromium
✅ Firefox
✅ Safari
✅ Edge
✅ Mobile Browsers (iOS Safari, Chrome Mobile)

## Customization Guide

### Change Colors
Edit the CSS variables in `style.css` (lines 6-16):
```css
:root {
    --primary-color: #0066ff;
    --secondary-color: #00d4ff;
    --accent-color: #00ff88;
    /* ... more colors ... */
}
```

### Change Font
Search for `font-family` in `style.css` and replace:
```css
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
```

### Adjust Images Size
Modify the `.profile-image` class in `style.css`:
```css
.profile-image {
    width: 250px;      /* Change width */
    height: 250px;     /* Change height */
    /* ... other properties ... */
}
```

## File Details

### index.html
- Contains all HTML structure
- 5 main sections with modals
- Semantic HTML5 markup
- Includes navigation bar and footer

### style.css
- 550+ lines of styling
- Mobile-responsive design
- Smooth animations and transitions
- Glassmorphism effects
- Professional color scheme

### script.js
- Modal open/close functionality
- Keyboard shortcuts (ESC to close)
- Click-outside-to-close feature
- Smooth scroll behavior
- Scroll animations
- Accessibility enhancements

## Tips for Best Results

1. **Profile Picture Quality**
   - Use a clear, professional photo
   - Good lighting and sharp focus
   - Avoid blurry or distorted images
   - Recommended size: at least 400x400px original

2. **Text Content**
   - Keep descriptions concise
   - Use professional language
   - Proofread all content
   - Ensure contact info is accurate

3. **Testing**
   - Test on different browsers
   - Check on mobile devices
   - Test all modal buttons
   - Try keyboard navigation (Tab, ESC)

4. **Sharing**
   - Save all files in the same folder
   - Zip the folder to share
   - Or upload to a web host

## Keyboard Shortcuts
- `ESC` - Close modal
- `Tab` - Navigate through buttons
- `Enter` - Activate focused button

## Performance
- Optimized animations
- Minimal CPU usage
- Fast load times
- No external dependencies required

## Support & Updates

### Need to Make Changes?
- **Update Text**: Edit the modal content in `index.html`
- **Change Colors**: Modify CSS variables in `style.css`
- **Add Sections**: Duplicate a card and modal in `index.html`
- **Modify Styling**: Edit `style.css` for design changes

### Common Issues

**Image Not Showing?**
- Check filename matches exactly (case-sensitive on some systems)
- Ensure image is in the same folder as HTML
- Try using absolute path if relative path doesn't work

**Modals Not Opening?**
- Check browser console for errors (F12)
- Ensure `script.js` is in the same folder
- Clear browser cache and refresh

**Styling Looks Wrong?**
- Clear browser cache (Ctrl+Shift+Del)
- Try a different browser
- Check CSS file is in the same folder

## Credits
Portfolio Template created with modern web technologies:
- HTML5
- CSS3 with animations
- Vanilla JavaScript
- Responsive design principles

## License
This portfolio is created for personal use. Feel free to customize and use it as your own.

---

**Ready to launch your portfolio?**
1. Add your profile picture as `profile.jpg`
2. Open `index.html` in your browser
3. Share it with the world! 🚀

**Questions or Issues?**
- Check this README
- Review the CSS/JS comments in the files
- Ensure all files are in the same folder

Enjoy your new professional portfolio! 💻✨
