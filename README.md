# HerWell - Women's Health Tracking Platform

A comprehensive web application for women's health tracking, built with Next.js, TypeScript, and Tailwind CSS. This platform provides AI-powered insights, cycle analysis, and personalized wellness support.

## 🌟 Features

### Core Features
- **Pregnancy Risk Predictor** with graphical analysis and personalized insights
- **Cycle Length Analysis and Menstrual Phase Tracker** with interactive charts
- **AI-powered Chatbot** for predicting irregularities and sharing health tips
- **Real-time dashboards** for dynamic, data-driven health support
- **Adaptive newsletters** tailored to user needs

### Additional Features
- Period tracking with history management
- Menstrual cycle phase visualization
- Health tips and wellness recommendations
- Notification system for appointments and medications
- User profile management
- Responsive design for all devices

## 🎨 Design

The application follows the same design patterns as UmbraCare, featuring:
- Soft pink color palette (#b06d82, #f2dde4, etc.)
- Clean, modern UI with rounded corners
- Card-based layout with hover effects
- Consistent typography using Inter font
- Subtle animations and transitions

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Chart.js with react-chartjs-2
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Deployment**: Vercel

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd herwell
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

## 🚀 Deployment to Vercel

### Method 1: Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

### Method 2: Vercel Dashboard

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with your GitHub account
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect Next.js and configure the build settings

3. **Deploy**
   - Click "Deploy"
   - Your app will be live at `https://your-project-name.vercel.app`

### Method 3: GitHub Integration

1. **Fork or create a new repository on GitHub**
2. **Push your code**
   ```bash
   git remote add origin https://github.com/yourusername/herwell.git
   git push -u origin main
   ```
3. **Connect to Vercel** (same as Method 2)

## 📁 Project Structure

```
herwell/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── period-tracker/    # Period tracker page
│   └── ...
├── components/            # React components
│   ├── Navigation.tsx     # Navigation component
│   ├── CycleAnalysisCard.tsx
│   ├── PregnancyRiskCard.tsx
│   ├── MenstrualPhasesCard.tsx
│   ├── IrregularityCard.tsx
│   ├── HealthTipsCard.tsx
│   └── NewsletterCard.tsx
├── public/               # Static assets
├── tailwind.config.js    # Tailwind configuration
├── next.config.js        # Next.js configuration
├── package.json          # Dependencies
└── README.md            # This file
```

## 🎯 Key Components

### Dashboard Cards
- **CycleAnalysisCard**: Line chart showing cycle length over time
- **PregnancyRiskCard**: Semi-circular gauge for period prediction
- **MenstrualPhasesCard**: Doughnut chart showing cycle phases
- **IrregularityCard**: AI-powered irregularity detection
- **HealthTipsCard**: Interactive health tips with illustrations
- **NewsletterCard**: Adaptive newsletter subscription

### Pages
- **Home**: Main dashboard with all features
- **Period Tracker**: Cycle tracking with history
- **About Us**: Feature descriptions and team info
- **Profile**: User profile management
- **Notifications**: Notification center
- **Newsletter**: Newsletter subscription

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for local development:
```env
NEXT_PUBLIC_APP_NAME=HerWell
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Tailwind Configuration
The app uses a custom pink color palette defined in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    50: '#fdf7f9',
    100: '#f2dde4',
    // ... more shades
    600: '#b06d82',
  }
}
```

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🎨 Customization

### Colors
Update the color palette in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    // Your custom colors
  }
}
```

### Fonts
Change fonts in `app/globals.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap');
```

## 🔮 Future Enhancements

- [ ] User authentication system
- [ ] Database integration (PostgreSQL/MongoDB)
- [ ] Real AI chatbot integration
- [ ] Push notifications
- [ ] Mobile app (React Native)
- [ ] Doctor consultation booking
- [ ] Community features
- [ ] Advanced analytics

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from UmbraCare
- Icons from Lucide React
- Charts from Chart.js
- UI components styled with Tailwind CSS

## 📞 Support

For support, email support@herwell.com or create an issue in this repository.

---

**Made with ❤️ for women's health and wellness**
