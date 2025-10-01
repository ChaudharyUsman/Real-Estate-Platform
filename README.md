# Real Estate Platform

A modern, responsive real estate website built with React.js, featuring property listings, dashboard management, and user-friendly interfaces.


<img width="1336" height="621" alt="image" src="https://github.com/user-attachments/assets/24812958-6efd-414a-a7c4-be89cbbac33b" />

## Features

### 🏠 Property Management
- **Dashboard**: Comprehensive property management with CRUD operations
- **Property Listings**: Browse and search available properties
- **Featured Properties**: Highlighted premium listings
- **Property Details**: Detailed view with images and specifications

### 👤 User Interface
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Interactive Animations**: Smooth hover effects and transitions
- **Modern UI**: Clean, professional design with Tailwind CSS
- **Error Handling**: Robust error boundaries for better user experience

### 📊 Analytics & Insights
- **Dashboard Analytics**: Property statistics and performance metrics
- **Status Tracking**: Monitor active, sold, and pending properties
- **Location Insights**: Geographic distribution of properties
- **Price Analytics**: Average pricing and market trends

### 🔐 User Management
- **Login System**: Secure user authentication
- **Forgot Password**: Password recovery functionality
- **User Profiles**: Personalized dashboard experience

## Technology Stack

- **Frontend Framework**: React.js
- **Styling**: Tailwind CSS
- **Language**: JavaScript (ES6+)
- **Build Tool**: Webpack/Vite
- **Icons**: Custom icon system
- **State Management**: React Hooks

## Project Structure

```
/
├── index.html                 # Main HTML file
├── app.js                     # Home page component
├── dashboard-app.js           # Dashboard with property management
├── listings-app.js            # Property listings page
├── property-app.js            # Individual property details
├── login-app.js               # User login
├── contact-app.js             # Contact page
├── about-app.js               # About page
├── forgot-password-app.js     # Password recovery
├── components/
│   ├── PropertyCard.js        # Reusable property card component
│   ├── FeaturedProperties.js  # Featured properties section
│   └── ...
├── utils/                     # Utility functions
├── trickle/                   # Additional utilities
└── dashboard.html, listings.html, etc. # Page-specific HTML files
```

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd real-estate-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000` or the specified port

## Usage

### For Users
- **Browse Properties**: Visit the home page to see featured listings
- **View Details**: Click on any property to see full details
- **Contact Agents**: Use the contact form for inquiries
- **User Account**: Login to access personalized features

### For Property Managers
- **Dashboard Access**: Login to access the management dashboard
- **Add Properties**: Use the "Add Property" button to create new listings
- **Edit Properties**: Click "Edit" on any property card to modify details
- **Delete Properties**: Remove properties with confirmation
- **View Analytics**: Monitor property performance and statistics

## Key Components

### DashboardApp
- Main dashboard component with tabbed interface
- CRUD operations for property management
- Analytics and overview statistics

### PropertyCard
- Reusable component for displaying property information
- Interactive hover effects and animations
- Responsive design for all screen sizes

### FeaturedProperties
- Showcases premium property listings
- Grid layout with smooth animations

## Animations & Interactions

The website features modern CSS animations using Tailwind CSS:
- **Hover Effects**: Cards scale and show enhanced shadows
- **Button Animations**: Scale and color transitions
- **Image Zoom**: Property images zoom on hover
- **Color Transitions**: Smooth color changes throughout the UI

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For questions or support, please contact the development team.

---



*Built with ❤️ using React.js and Tailwind CSS*
