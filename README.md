
# Global English Boost - Landing Page

A modern, multilingual landing page for English learning services built with React, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Multilingual Support**: English and Serbian language options
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS
- **Booking System**: Integrated consultation booking functionality
- **Contact Forms**: Email integration with Supabase Edge Functions
- **Fast Performance**: Built with Vite for optimal loading speed

## 🚀 Live Demo

Visit the live site: [https://yourusername.github.io/english-learning-landing-page/](https://yourusername.github.io/english-learning-landing-page/)

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible UI components
- **Vite** - Fast build tool and dev server
- **React Router** - Client-side routing
- **Supabase** - Backend services and email functions
- **Lucide React** - Beautiful icons

## 📦 Installation & Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/english-learning-landing-page.git
cd english-learning-landing-page
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:8080](http://localhost:8080) in your browser

## 🚀 Deployment

This project is configured to automatically deploy to GitHub Pages using GitHub Actions.

### Automatic Deployment
1. Push your code to the `main` branch
2. GitHub Actions will automatically build and deploy the site
3. Your site will be available at `https://yourusername.github.io/english-learning-landing-page/`

### Manual Build
```bash
npm run build
```

The built files will be in the `dist/` directory.

## 📧 Contact Form Setup

The contact form uses Supabase Edge Functions. To set it up:

1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Deploy the edge function in `supabase/functions/send-contact-email/`
3. Set up your Resend API key in Supabase secrets
4. Update the email recipients in the edge function

## 🌍 Languages

- English (EN)
- Serbian (SR)

## 📱 Responsive Design

The landing page is fully responsive and optimized for:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Created with ❤️ using [Lovable](https://lovable.dev)
