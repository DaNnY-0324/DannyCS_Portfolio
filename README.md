# Danny Andrew Nguyen - Portfolio Website

A modern, responsive portfolio website built with Next.js, Tailwind CSS, and Framer Motion. This portfolio showcases my projects, skills, experience, and certifications with a striking red, white, and black color scheme.

## Preview

<video src="public/video/Portfolio_Recording.mov" width="100%" autoplay loop muted></video>

*Portfolio website featuring dynamic backgrounds: Matrix-style code rain in dark mode and animated circuit board in light mode.*

## Features

- Modern design with a bold red, white, and black color scheme
- Matrix-inspired code rain background animation
- Dark/light theme toggle with localStorage persistence
- Responsive layout for all devices
- Smooth animations with Framer Motion
- Interactive project cards with hover effects
- Card flip animations for certifications
- Enhanced scroll progress bar
- Contact form with email integration
- SEO optimized

## Technologies Used

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **Animation**: Framer Motion, Canvas API
- **Visual Effects**: Custom animations, Canvas-based code rain
- **Icons**: React Icons
- **Contact Form**: EmailJS
- **Fonts**: Poppins, Roboto Mono (via Google Fonts)
- **Color Scheme**: Red, white, and black theme with dynamic contrast

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load Poppins and Roboto Mono from Google Fonts.

## Project Structure

```
├── public/            # Static assets
│   ├── fonts/         # Custom fonts
│   └── images/        # Images for projects and profile
├── src/
│   ├── app/          # Next.js App Router structure
│   │   ├── components/  # Reusable components
│   │   │   ├── BackToTop.tsx          # Back to top button
│   │   │   ├── CodeRainBackground.tsx  # Matrix-style code rain
│   │   │   ├── ContactForm.tsx        # Contact form component
│   │   │   ├── Footer.tsx             # Site footer
│   │   │   ├── Navbar.tsx             # Navigation bar
│   │   │   ├── ScrollProgressBar.tsx  # Progress indicator
│   │   │   ├── ThemeToggle.tsx        # Dark/light mode toggle
│   │   │   └── ThreeScene.tsx         # 3D scene (alternative)
│   │   ├── context/    # React context providers
│   │   │   └── ThemeContext.tsx      # Theme management
│   │   ├── sections/   # Main page sections
│   │   │   ├── AboutSection.tsx       # About me
│   │   │   ├── CertificationsSection.tsx # Certifications
│   │   │   ├── ContactSection.tsx     # Contact information
│   │   │   ├── ExperienceSection.tsx  # Work experience
│   │   │   ├── HeroSection.tsx        # Landing hero section
│   │   │   ├── ProjectsSection.tsx    # Portfolio projects
│   │   │   └── SkillsSection.tsx      # Skills and technologies
│   │   ├── globals.css  # Global styles and CSS variables
│   │   ├── layout.tsx   # Root layout with providers
│   │   └── page.tsx     # Main page component
├── package.json       # Dependencies and scripts
├── tailwind.config.js # Tailwind CSS configuration
└── tsconfig.json      # TypeScript configuration
│   ├── images/        # Images for the website
│   └── fonts/         # Font files (if any)
├── src/
│   ├── app/           # Next.js App Router
│   │   ├── components/  # Reusable components
│   │   ├── context/    # Context providers
│   │   ├── hooks/      # Custom hooks
│   │   ├── sections/   # Page sections
│   │   ├── styles/     # CSS styles
│   │   ├── utils/      # Utility functions
│   │   ├── types/      # TypeScript types
│   │   ├── layout.tsx  # Root layout
│   │   ├── page.tsx    # Home page
│   │   └── globals.css # Global styles
├── tailwind.config.js # Tailwind configuration
├── package.json       # Dependencies and scripts
└── README.md          # Project documentation
```

## Customization

### Changing Content

To update the content of the portfolio:

1. Edit the data in the respective section files under `src/app/sections/`
2. Update personal information, projects, skills, experience, and certifications
3. Replace placeholder images with your own in the `public/images/` directory

### Styling

The website uses Tailwind CSS for styling. You can customize the theme by editing:

- `tailwind.config.js` - For theme colors, fonts, and extensions
- `src/app/globals.css` - For global styles and CSS variables

## Deployment

### Deploy on Vercel (Recommended)

The easiest way to deploy this portfolio is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.

1. Push your code to a GitHub repository
2. Import the project to Vercel
3. Vercel will detect Next.js and set up the build configuration automatically

### Other Deployment Options

- **Netlify**: Connect your GitHub repository and deploy
- **GitHub Pages**: Use the `next export` command to generate static files
- **AWS Amplify**: Connect your repository for CI/CD deployment

## Contact

- **Email**: dannynguyen032@gmail.com
- **GitHub**: [DaNnY-0324](https://github.com/DaNnY-0324)
- **LinkedIn**: [dannyswe](https://www.linkedin.com/in/dannyswe/)

## License

This project is open source and available under the [MIT License](LICENSE).
