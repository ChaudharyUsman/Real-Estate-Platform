function PropertyCard({ property }) {
  try {
    if (!property) return null;

    const handleViewDetails = () => {
      window.location.href = `property.html?id=${property.id}`;
    };

    const formatPrice = (price) => {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
      }).format(price);
    };

    return (
      <div className="property-card transition-all duration-300 hover:scale-105 hover:shadow-lg" data-name="property-card" data-file="components/PropertyCard.js">
        <div className="relative">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-[var(--primary-color)] text-white px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 hover:scale-110">
              {property.type}
            </span>
          </div>
          <div className="absolute top-4 right-4">
            <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-red-50 transition-all duration-200 hover:scale-110">
              <div className="icon-heart text-lg text-gray-400 hover:text-red-500"></div>
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-semibold text-[var(--text-primary)] line-clamp-1 transition-colors duration-200 hover:text-blue-600">
              {property.title}
            </h3>
            <div className="text-2xl font-bold text-[var(--primary-color)] transition-colors duration-200">
              {formatPrice(property.price)}
            </div>
          </div>

          <div className="flex items-center text-[var(--text-secondary)] mb-4 transition-colors duration-200">
            <div className="icon-map-pin text-sm mr-1"></div>
            <span className="text-sm">{property.location}</span>
          </div>

          <div className="flex items-center justify-between mb-4 text-sm text-[var(--text-secondary)]">
            <div className="flex items-center transition-colors duration-200 hover:text-gray-700">
              <div className="icon-bed text-lg mr-1"></div>
              <span>{property.beds} beds</span>
            </div>
            <div className="flex items-center transition-colors duration-200 hover:text-gray-700">
              <div className="icon-bath text-lg mr-1"></div>
              <span>{property.baths} baths</span>
            </div>
            <div className="flex items-center transition-colors duration-200 hover:text-gray-700">
              <div className="icon-maximize text-lg mr-1"></div>
              <span>{property.area} sqft</span>
            </div>
          </div>

          <div className="flex space-x-2">
            <button
              onClick={handleViewDetails}
              className="flex-1 btn-primary text-sm py-2 transition-all duration-200 hover:scale-105 hover:shadow-md"
            >
              View Details
            </button>
            <button
              onClick={() => window.location.href = 'contact.html'}
              className="btn-secondary text-sm py-2 transition-all duration-200 hover:scale-105 hover:shadow-md"
            >
              <div className="icon-phone text-lg"></div>
            </button>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('PropertyCard component error:', error);
    return null;
  }
}