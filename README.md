# Omega Fabric - Business Consulting Website

A modern, responsive website for Omega Fabric, a business consulting firm specializing in executive coaching, professional mentoring, and strategic consulting.

## 🚀 Features

- **Responsive Design**: Fully responsive across all devices
- **Modern UI**: Built with Next.js 15 and Tailwind CSS
- **Professional Theme**: Purple-to-blue gradient design system
- **Core Pages**: Home, About, Services, Contact
- **Performance Optimized**: Static generation for fast loading
- **SEO Ready**: Metadata configured for search engines

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.3
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/omega.git

# Navigate to project directory
cd omega

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🏗️ Project Structure

```
omega/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with Header/Footer
│   ├── page.tsx           # Homepage
│   ├── about/page.tsx     # About page
│   ├── services/page.tsx  # Services overview
│   └── contact/page.tsx   # Contact page
├── components/
│   └── layout/
│       ├── Header.tsx     # Navigation header
│       └── Footer.tsx     # Site footer
├── lib/
│   └── utils/
│       └── cn.ts          # Utility functions
└── public/                # Static assets
```

## 🚀 Deployment

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/omega)

1. Click the button above
2. Connect your GitHub account
3. Configure environment variables (if needed)
4. Deploy!

### Manual Deployment

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 📝 Environment Variables

Copy `.env.example` to `.env.local` for local development:

```bash
cp .env.example .env.local
```

## 🎨 Customization

### Colors
The site uses a purple-to-blue gradient theme. To customize colors, edit the Tailwind classes throughout the components.

### Content
All content is directly in the component files. Edit the respective page components to update content.

## 📄 License

This project is private and proprietary to Omega Fabric.

## 🤝 Contributing

This is a private repository. For any questions or issues, please contact the development team.

## 📧 Contact

For inquiries about the website or services:
- Email: contact@omegafabric.com
- Phone: +1 (555) 123-4567
- Address: 123 Business Ave, Suite 100, San Francisco, CA 94105

---

Built with ❤️ by Omega Fabric Development Team