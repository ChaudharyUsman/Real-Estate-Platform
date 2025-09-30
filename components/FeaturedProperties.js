function FeaturedProperties() {
  try {
    const [featuredProperties, setFeaturedProperties] = React.useState([]);

    React.useEffect(() => {
      // Get sample properties from utils
      if (window.sampleProperties) {
        setFeaturedProperties(window.sampleProperties.slice(0, 6));
      }
    }, []);

    return (
      <section className="py-16 bg-white transition-colors duration-300 hover:bg-gray-50" data-name="featured-properties" data-file="components/FeaturedProperties.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text-primary)] mb-4 transition-colors duration-300 hover:text-blue-600">
              Featured Properties
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto transition-colors duration-300 hover:text-gray-700">
              Discover our handpicked selection of premium properties in prime locations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => window.location.href = 'listings.html'}
              className="btn-primary transition-all duration-200 hover:scale-105 hover:shadow-lg"
            >
              View All Properties
            </button>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('FeaturedProperties component error:', error);
    return null;
  }
}