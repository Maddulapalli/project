# Personal Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. This portfolio showcases your projects, skills, and provides a way for visitors to contact you.

## Features

- Responsive design that works on all devices
- Smooth scrolling navigation
- Project showcase with images and links
- Skills section with visual tags
- Contact form with validation
- Social media links
- Scroll to top button
- Fade-in animations
- Mobile-friendly navigation

## Getting Started

1. Clone this repository or download the files
2. Replace the placeholder content in `index.html` with your information:
   - Update your name, bio, and tagline
   - Add your profile picture to the `images` folder
   - Update the social media links in the footer

3. Customize the projects in `js/main.js`:
   - Add your project details to the `projects` array
   - Include project images in the `images` folder
   - Update GitHub and live demo links

4. Add your resume files:
   - Place your PDF resume as `resume.pdf` in the root directory
   - Place your Word resume as `resume.docx` in the root directory

5. Set up the contact form:
   - Replace `YOUR_FORM_SUBMISSION_ENDPOINT` in `js/main.js` with your actual form submission endpoint
   - You can use services like Formspree, Netlify Forms, or create your own backend

## Customization

### Colors
You can customize the color scheme by modifying the CSS variables in `css/style.css`:
```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #1e40af;
    --text-color: #1f2937;
    --light-text: #6b7280;
    --background: #ffffff;
    --section-bg: #f3f4f6;
}
```

### Fonts
The website uses the Inter font family by default. You can change this in `css/style.css`:
```css
body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
```

## Deployment

1. Choose a hosting platform (GitHub Pages, Netlify, Vercel, etc.)
2. Push your code to a repository
3. Follow the platform's deployment instructions

### GitHub Pages
1. Create a new repository on GitHub
2. Push your code to the repository
3. Go to repository Settings > Pages
4. Select the main branch as the source
5. Your site will be available at `https://yourusername.github.io/repository-name`

### Netlify
1. Sign up for a Netlify account
2. Connect your GitHub repository
3. Deploy with default settings
4. Your site will be available at `https://your-site-name.netlify.app`

## Browser Support

The website is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is licensed under the MIT License - see the LICENSE file for details. 