function ListingsFilter({ onFilter }) {
  try {
    const [filters, setFilters] = React.useState({
      location: '',
      propertyType: '',
      minPrice: '',
      maxPrice: '',
      bedrooms: '',
      bathrooms: ''
    });

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      const newFilters = { ...filters, [name]: value };
      setFilters(newFilters);
      onFilter(newFilters);
    };

    const clearFilters = () => {
      const emptyFilters = {
        location: '',
        propertyType: '',
        minPrice: '',
        maxPrice: '',
        bedrooms: '',
        bathrooms: ''
      };
      setFilters(emptyFilters);
      onFilter(emptyFilters);
    };

    return (
      <div className="bg-white rounded-xl shadow-sm p-6" data-name="listings-filter" data-file="components/ListingsFilter.js">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-[var(--text-primary)]">Filters</h3>
          <button onClick={clearFilters} className="text-[var(--primary-color)] text-sm hover:underline">
            Clear All
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">Location</label>
            <input
              type="text"
              name="location"
              value={filters.location}
              onChange={handleInputChange}
              placeholder="Enter city or area..."
              className="search-input"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">Property Type</label>
            <select name="propertyType" value={filters.propertyType} onChange={handleInputChange} className="search-input">
              <option value="">All Types</option>
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="condo">Condo</option>
              <option value="villa">Villa</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">Min Price</label>
              <input
                type="number"
                name="minPrice"
                value={filters.minPrice}
                onChange={handleInputChange}
                placeholder="$0"
                className="search-input text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">Max Price</label>
              <input
                type="number"
                name="maxPrice"
                value={filters.maxPrice}
                onChange={handleInputChange}
                placeholder="Any"
                className="search-input text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">Bedrooms</label>
              <select name="bedrooms" value={filters.bedrooms} onChange={handleInputChange} className="search-input text-sm">
                <option value="">Any</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">Bathrooms</label>
              <select name="bathrooms" value={filters.bathrooms} onChange={handleInputChange} className="search-input text-sm">
                <option value="">Any</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('ListingsFilter component error:', error);
    return null;
  }
}