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

function PropertyApp() {
  try {
    const [property, setProperty] = React.useState(null);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
      const urlParams = new URLSearchParams(window.location.search);
      const propertyId = urlParams.get('id');
      
      if (window.sampleProperties && propertyId) {
        const foundProperty = window.sampleProperties.find(p => p.id == propertyId);
        setProperty(foundProperty);
      }
      setLoading(false);
    }, []);

    const formatPrice = (price) => {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
      }).format(price);
    };

    if (loading) {
      return (
        <div className="min-h-screen bg-[var(--secondary-color)]">
          <Header />
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[var(--primary-color)]"></div>
          </div>
          <Footer />
        </div>
      );
    }

    if (!property) {
      return (
        <div className="min-h-screen bg-[var(--secondary-color)]">
          <Header />
          <div className="max-w-7xl mx-auto px-4 py-20 text-center">
            <h1 className="text-3xl font-bold mb-4">Property Not Found</h1>
            <p className="text-[var(--text-secondary)] mb-8">The property you're looking for doesn't exist.</p>
            <button onClick={() => window.location.href = 'listings.html'} className="btn-primary">
              Back to Listings
            </button>
          </div>
          <Footer />
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-[var(--secondary-color)]">
        <Header />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-6">
            <button onClick={() => window.history.back()} className="flex items-center text-[var(--primary-color)] hover:underline">
              <div className="icon-arrow-left text-lg mr-2"></div>
              Back to Listings
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="aspect-video w-full">
              <img src={property.image} alt={property.title} className="w-full h-full object-cover" />
            </div>

            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-2">{property.title}</h1>
                  <div className="flex items-center text-[var(--text-secondary)]">
                    <div className="icon-map-pin text-lg mr-2"></div>
                    <span>{property.location}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-[var(--primary-color)]">{formatPrice(property.price)}</div>
                  <div className="text-[var(--text-secondary)]">{property.type}</div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-4">Property Details</h2>
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center p-4 bg-[var(--secondary-color)] rounded-lg">
                        <div className="icon-bed text-2xl text-[var(--primary-color)] mx-auto mb-2"></div>
                        <div className="font-semibold">{property.beds}</div>
                        <div className="text-sm text-[var(--text-secondary)]">Bedrooms</div>
                      </div>
                      <div className="text-center p-4 bg-[var(--secondary-color)] rounded-lg">
                        <div className="icon-bath text-2xl text-[var(--primary-color)] mx-auto mb-2"></div>
                        <div className="font-semibold">{property.baths}</div>
                        <div className="text-sm text-[var(--text-secondary)]">Bathrooms</div>
                      </div>
                      <div className="text-center p-4 bg-[var(--secondary-color)] rounded-lg">
                        <div className="icon-maximize text-2xl text-[var(--primary-color)] mx-auto mb-2"></div>
                        <div className="font-semibold">{property.area}</div>
                        <div className="text-sm text-[var(--text-secondary)]">Sq Ft</div>
                      </div>
                    </div>
                    <p className="text-[var(--text-secondary)]">{property.description}</p>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold mb-4">Features</h2>
                    <div className="grid grid-cols-2 gap-2">
                      {property.features?.map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <div className="icon-check text-[var(--accent-color)] mr-2"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-1">
                  <div className="bg-[var(--secondary-color)] rounded-xl p-6">
                    <h3 className="text-lg font-semibold mb-4">Contact Agent</h3>
                    <div className="space-y-4">
                      <button className="btn-primary w-full flex items-center justify-center">
                        <div className="icon-phone text-lg mr-2"></div>
                        Call Now
                      </button>
                      <button className="btn-secondary w-full flex items-center justify-center">
                        <div className="icon-mail text-lg mr-2"></div>
                        Email Agent
                      </button>
                      <button className="btn-secondary w-full flex items-center justify-center">
                        <div className="icon-calendar text-lg mr-2"></div>
                        Schedule Tour
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  } catch (error) {
    console.error('PropertyApp component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <PropertyApp />
  </ErrorBoundary>
);