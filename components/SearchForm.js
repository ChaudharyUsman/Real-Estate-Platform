function SearchForm() {
  try {
    const [searchData, setSearchData] = React.useState({
      location: '',
      minPrice: '',
      maxPrice: '',
      propertyType: '',
      bedrooms: ''
    });

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setSearchData(prev => ({
        ...prev,
        [name]: value
      }));
    };

    const handleSearch = (e) => {
      e.preventDefault();
      const params = new URLSearchParams();
      Object.entries(searchData).forEach(([key, value]) => {
        if (value) params.append(key, value);
      });
      window.location.href = `listings.html?${params.toString()}`;
    };

    return (
      <form onSubmit={handleSearch} className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8" data-name="search-form" data-file="components/SearchForm.js">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div className="sm:col-span-2 lg:col-span-2">
            <label className="block text-sm font-medium text-gray-900 mb-2">Location</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <div className="icon-map-pin text-lg text-gray-500"></div>
              </div>
              <input
                type="text"
                name="location"
                value={searchData.location}
                onChange={handleInputChange}
                placeholder="Enter city, neighborhood..."
                className="search-input pl-10 w-full"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">Property Type</label>
            <select
              name="propertyType"
              value={searchData.propertyType}
              onChange={handleInputChange}
              className="search-input w-full text-black"
            >
              <option value="">All Types</option>
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="condo">Condo</option>
              <option value="villa">Villa</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">Price Range</label>
            <select
              name="priceRange"
              onChange={(e) => {
                const [min, max] = e.target.value.split('-');
                setSearchData(prev => ({
                  ...prev,
                  minPrice: min || '',
                  maxPrice: max || ''
                }));
              }}
              className="search-input w-full text-black"
            >
              <option value="">Any Price</option>
              <option value="0-500000">$0 - $500k</option>
              <option value="500000-1000000">$500k - $1M</option>
              <option value="1000000-2000000">$1M - $2M</option>
              <option value="2000000-">$2M+</option>
            </select>
          </div>

          <div className="flex items-end">
            <button type="submit" className="btn-primary w-full h-12 sm:h-10 flex items-center justify-center text-sm sm:text-base">
              <div className="icon-search text-lg mr-2"></div>
              Search
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 sm:gap-4 text-sm">
          <button type="button" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
            <div className="icon-bed text-lg mr-1"></div>
            Bedrooms
          </button>
          <button type="button" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
            <div className="icon-bath text-lg mr-1"></div>
            Bathrooms
          </button>
          <button type="button" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
            <div className="icon-maximize text-lg mr-1"></div>
            Square Feet
          </button>
        </div>
      </form>
    );
  } catch (error) {
    console.error('SearchForm component error:', error);
    return null;
  }
}
