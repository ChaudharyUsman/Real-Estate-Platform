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
            <p className="text-gray-600 mb-4">We're sorry, but something unexpected happened.</p>
            <button onClick={() => window.location.reload()} className="btn-primary">
              Reload Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function ListingsApp() {
  try {
    const [properties, setProperties] = React.useState([]);
    const [filteredProperties, setFilteredProperties] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
      if (window.sampleProperties) {
        setProperties(window.sampleProperties);
        setFilteredProperties(window.sampleProperties);
        setLoading(false);
      }
    }, []);

    const handleFilter = (filters) => {
      let filtered = [...properties];
      
      if (filters.location) {
        filtered = filtered.filter(p => 
          p.location.toLowerCase().includes(filters.location.toLowerCase())
        );
      }
      
      if (filters.propertyType) {
        filtered = filtered.filter(p => 
          p.type.toLowerCase() === filters.propertyType.toLowerCase()
        );
      }
      
      if (filters.minPrice) {
        filtered = filtered.filter(p => p.price >= parseInt(filters.minPrice));
      }
      
      if (filters.maxPrice) {
        filtered = filtered.filter(p => p.price <= parseInt(filters.maxPrice));
      }
      
      setFilteredProperties(filtered);
    };

    return (
      <div className="min-h-screen bg-[var(--secondary-color)]">
        <Header />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-2">Property Listings</h1>
            <p className="text-[var(--text-secondary)]">
              {filteredProperties.length} properties found
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/4">
              <ListingsFilter onFilter={handleFilter} />
            </div>
            
            <div className="lg:w-3/4">
              {loading ? (
                <div className="text-center py-12">
                  <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[var(--primary-color)] mx-auto"></div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProperties.map((property) => (
                    <PropertyCard key={property.id} property={property} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  } catch (error) {
    console.error('ListingsApp component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <ListingsApp />
  </ErrorBoundary>
);