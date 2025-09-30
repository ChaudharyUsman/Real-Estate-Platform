class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
            <button onClick={() => window.location.reload()} className="btn-primary">Reload Page</button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function AboutApp() {
  try {
    return (
      <div className="min-h-screen bg-[var(--secondary-color)]">
        <Header />
        
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-4">About PrimeEstates</h1>
              <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
                We're dedicated to helping you find the perfect property and making your real estate dreams a reality.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Modern real estate office"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-[var(--text-secondary)] mb-6">
                  At PrimeEstates, we believe that finding the right property should be an exciting journey, not a stressful ordeal. 
                  Our mission is to revolutionize the real estate experience by combining cutting-edge technology with personalized service.
                </p>
                <p className="text-[var(--text-secondary)] mb-6">
                  Whether you're buying your first home, upgrading to your dream property, or investing in real estate, 
                  our team of experienced professionals is here to guide you every step of the way.
                </p>
                <button onClick={() => window.location.href = 'contact.html'} className="btn-primary">
                  Get in Touch
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-[var(--primary-color)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="icon-shield text-2xl text-white"></div>
                </div>
                <h3 className="text-xl font-semibold mb-3">Trusted & Secure</h3>
                <p className="text-[var(--text-secondary)]">Your transactions are protected with bank-level security and verified listings.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[var(--accent-color)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="icon-users text-2xl text-white"></div>
                </div>
                <h3 className="text-xl font-semibold mb-3">Expert Support</h3>
                <p className="text-[var(--text-secondary)]">Our experienced agents provide personalized guidance throughout your journey.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[var(--primary-color)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="icon-zap text-2xl text-white"></div>
                </div>
                <h3 className="text-xl font-semibold mb-3">Fast & Efficient</h3>
                <p className="text-[var(--text-secondary)]">Streamlined processes to help you buy or sell properties quickly and efficiently.</p>
              </div>
            </div>

            <div className="text-center bg-[var(--secondary-color)] rounded-xl p-8">
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-[var(--text-secondary)] mb-6 max-w-2xl mx-auto">
                Join thousands of satisfied clients who have found their dream properties with PrimeEstates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button onClick={() => window.location.href = 'listings.html'} className="btn-primary">
                  Browse Properties
                </button>
                <button onClick={() => window.location.href = 'contact.html'} className="btn-secondary">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  } catch (error) {
    console.error('AboutApp component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <AboutApp />
  </ErrorBoundary>
);
