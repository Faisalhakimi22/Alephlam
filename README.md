# AlephLam - Professional Islamic Education Platform

A beautiful, modern website for AlephLam, an online Islamic education platform offering Quran and Arabic learning courses for the whole family.

## 🎨 Design Features

- **Professional Design**: Clean, modern interface with Islamic aesthetic
- **Custom Colors**: Primary (#ae8d36) and Secondary (#083843) color scheme
- **Responsive**: Fully responsive design that works on all devices
- **Animations**: Smooth animations and transitions using Framer Motion
- **Interactive Elements**: Working forms, quiz, and navigation

## 🚀 Features

### Core Functionality
- **Responsive Navigation**: Mobile-friendly navigation with hamburger menu
- **Hero Section**: Compelling landing section with call-to-action buttons
- **Course Showcase**: Comprehensive display of all course offerings
- **Interactive Quiz**: Course recommendation quiz for students
- **Contact Forms**: Multiple contact form types with validation
- **Testimonials**: Student reviews and ratings
- **Footer**: Complete footer with links and newsletter signup

### Course Categories
- **Quran Courses**: Nouraniyyah, Noorul-Bayaan, Tajweed, Hifz, Reading Correction
- **Arabic Language**: Madina Arabic, Bayna Yadaik
- **Children's Courses**: Alif Ba, Tajweed for Kids, Hifz for Children, Prayer Learning

### Interactive Elements
- **Course Quiz**: 5-question quiz to recommend the perfect course
- **Contact Forms**: Different forms for various inquiry types
- **Form Validation**: Client-side validation with error messages
- **Smooth Scrolling**: Navigation with smooth scroll to sections

## 🛠️ Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form
- **Intersection Observer**: React Intersection Observer

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd alephlam-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
alephlam-website/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main homepage
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Hero.tsx             # Hero section
│   ├── Features.tsx         # Features showcase
│   ├── Courses.tsx          # Course listings
│   ├── Testimonials.tsx     # Student testimonials
│   ├── ContactForm.tsx      # Contact forms
│   ├── Footer.tsx           # Footer component
│   └── CourseQuiz.tsx       # Interactive course quiz
├── public/
│   └── logo.png             # AlephLam logo
├── tailwind.config.js       # Tailwind configuration
├── package.json             # Dependencies and scripts
└── README.md               # This file
```

## 🎯 Key Components

### Header Component
- Responsive navigation with mobile menu
- Logo and branding
- Navigation links to all sections
- Login button

### Hero Section
- Compelling headline and description
- Feature highlights
- Call-to-action buttons
- Decorative Arabic text elements

### Courses Section
- Three main categories: Quran, Arabic, Children
- Detailed course cards with pricing
- Feature lists for each course
- Booking buttons

### Course Quiz
- 5-question interactive quiz
- Progress tracking
- Course recommendations based on answers
- Beautiful result display

### Contact Forms
- Multiple form types (general, waitlist, passive, children)
- Form validation
- Success messages
- Contact information display

## 🎨 Customization

### Colors
The website uses a custom color palette defined in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    DEFAULT: '#ae8d36',    // Gold
    light: '#c4a44a',
    dark: '#8b6f2b',
  },
  secondary: {
    DEFAULT: '#083843',    // Dark teal
    light: '#0a4a5a',
    dark: '#052a35',
  }
}
```

### Fonts
- **Primary**: Inter (Google Fonts)
- **Arabic**: Noto Naskh Arabic (Google Fonts)

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Deploy to Vercel
1. Connect your repository to Vercel
2. Vercel will automatically detect Next.js
3. Deploy with default settings

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📞 Contact Information

- **Email**: alephlam03@gmail.com
- **Phone**: +49 159 022 97532
- **Platform**: Online classes via Zoom

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

---

**AlephLam** - Professional Islamic Education Platform
*Learn Quran and Arabic online with qualified teachers in a supportive, family-friendly environment.*
