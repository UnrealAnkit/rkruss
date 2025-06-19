# 🌍 RK Visa Solutions - Immigration & Education Consultancy

[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://rkruss.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

> **Your trusted partner for global immigration and education services**

A modern, responsive website for RK Visa Solutions - helping students and professionals achieve their international aspirations through comprehensive visa solutions and educational consultancy services.

## 🚀 Live Website

**Visit:** [rkruss.vercel.app](https://rkruss.vercel.app)

## ✨ Features

### 🎯 Core Services
- **Immigration Solutions** - Work, Student, and Business visa services
- **Education Consultancy** - University admissions across multiple countries
- **Document Processing** - Complete assistance with visa documentation
- **Free Assessment** - Personalized immigration eligibility evaluation

### 🌍 Country Coverage
- 🇷🇺 **Russia** - Work permits, student visas, HQS programs
- 🇸🇬 **Singapore** - Employment passes, education pathways
- 🇦🇪 **UAE** - Business visas, work permits
- 🇦🇲 **Armenia** - Flexible immigration options
- 🇰🇿 **Kazakhstan** - Technical and medical education
- 🇲🇺 **Mauritius** - British & French education systems

### 💻 Technical Features
- **Responsive Design** - Optimized for all devices
- **Interactive UI** - Modern animations and smooth transitions
- **Social Media Integration** - Authentic brand colors and floating widgets
- **Contact Forms** - Multiple ways to reach out
- **Progressive Web App** - Fast loading and offline capabilities
- **SEO Optimized** - Better search engine visibility

## 🛠️ Tech Stack

### Frontend
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI + shadcn/ui
- **Animations:** Framer Motion
- **Icons:** Lucide React

### Authentication & Backend
- **Auth:** Clerk Authentication
- **Email:** Contact form integration
- **Analytics:** Built-in performance monitoring

### Deployment & Infrastructure
- **Hosting:** Vercel (Automatic deployments)
- **Domain:** Custom domain with SSL
- **Performance:** Edge functions and CDN optimization

## 📦 Installation

### Prerequisites
- **Node.js** 18+ 
- **npm** or **yarn** package manager
- **Git** for version control

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/UnrealAnkit/rkruss.git
   cd rkruss
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Configure your environment variables:
   ```env
   # Authentication (Clerk)
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   
   # Email Configuration
   RESEND_API_KEY=your_resend_api_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
rkruss/
├── app/                          # Next.js App Router
│   ├── about/                    # About page
│   ├── assessment/               # Free assessment page
│   ├── colleges/                 # University listings
│   ├── contact/                  # Contact forms
│   ├── immigration/              # Immigration services
│   │   ├── business-visa/        # Business visa info
│   │   ├── student-visa/         # Student visa info
│   │   └── work-visa/            # Work visa info
│   ├── visa-solutions/           # Visa solutions overview
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Homepage
├── components/                   # Reusable components
│   ├── home/                     # Homepage sections
│   │   ├── hero-section.tsx      # Hero banner with carousel
│   │   ├── services-section.tsx  # Services overview
│   │   └── contact-section.tsx   # Contact CTA
│   ├── layout/                   # Layout components
│   │   ├── header.tsx            # Navigation header
│   │   └── footer.tsx            # Footer with social media
│   └── ui/                       # shadcn/ui components
├── public/                       # Static assets
│   └── images/                   # Logo and banner images
├── lib/                          # Utility functions
└── hooks/                        # Custom React hooks
```

## 🎨 Design System

### Colors
- **Primary:** Blue gradient (#1e40af to #3b82f6)
- **Accent:** Red (#ef4444)
- **Secondary:** Slate (#64748b)
- **Success:** Green (#22c55e)

### Typography
- **Headings:** Inter font family
- **Body:** System font stack
- **Responsive:** Fluid typography scaling

### Components
- **Buttons:** Multiple variants with hover effects
- **Cards:** Clean design with subtle shadows
- **Forms:** Accessible with validation
- **Navigation:** Responsive with mobile menu

## 🚀 Deployment

### Automatic Deployment (Recommended)
The project is automatically deployed to Vercel when changes are pushed to the `main` branch.

### Manual Deployment
```bash
# Build the project
npm run build

# Start production server
npm start
```

### Environment Setup
1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Enable automatic deployments on push

## 📱 Social Media Integration

The website includes comprehensive social media integration:

- **Floating Social Bar** (Mobile)
- **Header Social Icons** (Desktop)
- **Footer Social Links** (All devices)
- **WhatsApp Integration** (Global floating button)

### Supported Platforms
- Facebook
- Twitter/X
- Instagram
- LinkedIn
- YouTube
- WhatsApp

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Development Guidelines
- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Ensure responsive design
- Test on multiple devices
- Maintain accessibility standards

## 📧 Contact & Support

### Development Team
- **Lead Developer:** [work.ankit2@gmail.com](mailto:work.ankit2@gmail.com)
- **Full Stack Developer:** [xshankarmishra@gmail.com](mailto:xshankarmishra@gmail.com)

### Business Inquiries
- **Website:** [rkruss.vercel.app](https://rkruss.vercel.app)
- **Email:** info@rkruss.com
- **Phone:** +7 (495) 123-4567

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Design Inspiration:** Modern immigration consultancy websites
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Icons:** [Lucide Icons](https://lucide.dev/)
- **Deployment:** [Vercel Platform](https://vercel.com/)

---

<div align="center">

**Made with ❤️ for global immigration success**

[![GitHub stars](https://img.shields.io/github/stars/UnrealAnkit/rkruss?style=social)](https://github.com/UnrealAnkit/rkruss/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/UnrealAnkit/rkruss?style=social)](https://github.com/UnrealAnkit/rkruss/network/members)

</div> 