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

function DashboardApp() {
  try {
    const [activeTab, setActiveTab] = React.useState('overview');
    const [myProperties, setMyProperties] = React.useState(window.sampleProperties || []);

    const addProperty = (property) => {
      const newProperty = { ...property, id: Date.now() };
      setMyProperties(prev => [...prev, newProperty]);
    };

    const updateProperty = (updatedProperty) => {
      setMyProperties(prev => prev.map(prop => prop.id === updatedProperty.id ? updatedProperty : prop));
    };

    const deleteProperty = (id) => {
      setMyProperties(prev => prev.filter(prop => prop.id !== id));
    };

    const tabs = [
      { id: 'overview', label: 'Overview' },
      { id: 'properties', label: 'My Properties' },
      { id: 'analytics', label: 'Analytics' },
    ];

    const renderTabContent = () => {
      switch (activeTab) {
        case 'overview':
          return <OverviewTab properties={myProperties} />;
        case 'properties':
          return <PropertiesTab properties={myProperties} onAdd={addProperty} onUpdate={updateProperty} onDelete={deleteProperty} />;
        case 'analytics':
          return <AnalyticsTab properties={myProperties} />;
        default:
          return <OverviewTab properties={myProperties} />;
      }
    };

    return (
      <div className="min-h-screen bg-gray-50">
        {/* Professional Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 transition-shadow duration-300 hover:shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 transition-colors duration-300">Dashboard</h1>
                <p className="text-sm text-gray-600 transition-colors duration-300">Welcome back, John Doe</p>
              </div>
              <div className="flex items-center space-x-4">
                <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200 rounded-full hover:bg-gray-100">
                  <i className="icon-bell text-xl"></i>
                </button>
                <div className="flex items-center space-x-3 hover:scale-105 transition-transform duration-200 cursor-pointer">
                  <img
                    className="h-10 w-10 rounded-full transition-transform duration-200"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="User avatar"
                  />
                  <div className="hidden md:block">
                    <p className="text-sm font-medium text-gray-900 transition-colors duration-200">John Doe</p>
                    <p className="text-xs text-gray-500 transition-colors duration-200">Property Manager</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

          {/* Tab Navigation */}
          <div className="border-b border-gray-200 mb-8">
            <nav className="-mb-px flex space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-2 px-1 border-b-2 font-medium text-sm transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 hover:scale-105'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="bg-white shadow rounded-lg p-6 transition-shadow duration-300 hover:shadow-lg">
            {renderTabContent()}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error in DashboardApp:', error);
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong in Dashboard</h1>
          <button onClick={() => window.location.reload()} className="btn-primary">Reload Page</button>
        </div>
      </div>
    );
  }
}

function OverviewTab({ properties }) {
  const totalProperties = properties.length;
  const totalValue = properties.reduce((sum, prop) => sum + (prop.price || 0), 0);
  const activeListings = properties.filter(p => p.status === 'active').length;
  const soldProperties = properties.filter(p => p.status === 'sold').length;
  const pendingProperties = properties.filter(p => p.status === 'pending').length;
  const averagePrice = totalProperties > 0 ? Math.round(totalValue / totalProperties) : 0;

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-900">Total Properties</h3>
          <p className="text-3xl font-bold text-blue-600">{totalProperties}</p>
        </div>
        <div className="bg-green-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-green-900">Total Value</h3>
          <p className="text-3xl font-bold text-green-600">${totalValue.toLocaleString()}</p>
        </div>
        <div className="bg-purple-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-purple-900">Active Listings</h3>
          <p className="text-3xl font-bold text-purple-600">{activeListings}</p>
        </div>
        <div className="bg-yellow-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-yellow-900">Average Price</h3>
          <p className="text-3xl font-bold text-yellow-600">${averagePrice.toLocaleString()}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-red-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-red-900">Sold Properties</h3>
          <p className="text-3xl font-bold text-red-600">{soldProperties}</p>
        </div>
        <div className="bg-indigo-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-indigo-900">Pending Sales</h3>
          <p className="text-3xl font-bold text-indigo-600">{pendingProperties}</p>
        </div>
        <div className="bg-teal-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-teal-900">Success Rate</h3>
          <p className="text-3xl font-bold text-teal-600">{totalProperties > 0 ? Math.round((soldProperties / totalProperties) * 100) : 0}%</p>
        </div>
      </div>
    </div>
  );
}

function PropertiesTab({ properties, onAdd, onUpdate, onDelete }) {
  const [showForm, setShowForm] = React.useState(false);
  const [editingProperty, setEditingProperty] = React.useState(null);
  const [formData, setFormData] = React.useState({
    title: '',
    location: '',
    price: '',
    beds: '',
    baths: '',
    area: '',
    status: 'active',
    type: 'house',
    image: ''
  });

  const handleAdd = () => {
    setEditingProperty(null);
    setFormData({
      title: '',
      location: '',
      price: '',
      beds: '',
      baths: '',
      area: '',
      status: 'active',
      type: 'house',
      image: ''
    });
    setShowForm(true);
  };

  const handleEdit = (property) => {
    setEditingProperty(property);
    setFormData({ ...property });
    setShowForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const property = { ...formData, price: parseFloat(formData.price), beds: parseInt(formData.beds), baths: parseInt(formData.baths), area: parseInt(formData.area) };
    if (editingProperty) {
      onUpdate({ ...editingProperty, ...property });
    } else {
      onAdd(property);
    }
    setShowForm(false);
  };

  const handleCancel = () => {
    setShowForm(false);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">My Properties</h2>
        <button onClick={handleAdd} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-all duration-200 hover:scale-105 hover:shadow-md">
          Add Property
        </button>
      </div>
      {showForm && (
        <div className="mb-6 p-4 border rounded bg-gray-50">
          <h3 className="text-lg font-semibold mb-4">{editingProperty ? 'Edit Property' : 'Add New Property'}</h3>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Title" value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} className="p-2 border rounded" required />
            <input type="text" placeholder="Location" value={formData.location} onChange={(e) => setFormData({...formData, location: e.target.value})} className="p-2 border rounded" required />
            <input type="number" placeholder="Price" value={formData.price} onChange={(e) => setFormData({...formData, price: e.target.value})} className="p-2 border rounded" required />
            <input type="number" placeholder="Beds" value={formData.beds} onChange={(e) => setFormData({...formData, beds: e.target.value})} className="p-2 border rounded" required />
            <input type="number" placeholder="Baths" value={formData.baths} onChange={(e) => setFormData({...formData, baths: e.target.value})} className="p-2 border rounded" required />
            <input type="number" placeholder="Area (sqft)" value={formData.area} onChange={(e) => setFormData({...formData, area: e.target.value})} className="p-2 border rounded" required />
            <select value={formData.status} onChange={(e) => setFormData({...formData, status: e.target.value})} className="p-2 border rounded">
              <option value="active">Active</option>
              <option value="sold">Sold</option>
              <option value="pending">Pending</option>
            </select>
            <select value={formData.type} onChange={(e) => setFormData({...formData, type: e.target.value})} className="p-2 border rounded">
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="condo">Condo</option>
            </select>
            <input type="url" placeholder="Image URL" value={formData.image} onChange={(e) => setFormData({...formData, image: e.target.value})} className="p-2 border rounded col-span-2" required />
            <div className="col-span-2 flex space-x-2">
              <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-all duration-200 hover:scale-105">{editingProperty ? 'Update' : 'Add'}</button>
              <button type="button" onClick={handleCancel} className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition-all duration-200 hover:scale-105">Cancel</button>
            </div>
          </form>
        </div>
      )}
      {properties.length === 0 ? (
        <p className="text-gray-500">No properties found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} onEdit={handleEdit} onDelete={onDelete} />
          ))}
        </div>
      )}
    </div>
  );
}

function AnalyticsTab({ properties }) {
  const typeCounts = properties.reduce((acc, prop) => {
    acc[prop.type] = (acc[prop.type] || 0) + 1;
    return acc;
  }, {});

  const priceRanges = {
    'Under $500K': properties.filter(p => p.price < 500000).length,
    '$500K - $1M': properties.filter(p => p.price >= 500000 && p.price < 1000000).length,
    '$1M - $2M': properties.filter(p => p.price >= 1000000 && p.price < 2000000).length,
    'Over $2M': properties.filter(p => p.price >= 2000000).length,
  };

  const statusCounts = properties.reduce((acc, prop) => {
    acc[prop.status] = (acc[prop.status] || 0) + 1;
    return acc;
  }, {});

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Analytics</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Property Types</h3>
          <div className="space-y-2">
            {Object.entries(typeCounts).map(([type, count]) => (
              <div key={type} className="flex justify-between items-center">
                <span className="text-gray-700">{type}</span>
                <div className="flex items-center space-x-2">
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${(count / properties.length) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600">{count}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Price Ranges</h3>
          <div className="space-y-2">
            {Object.entries(priceRanges).map(([range, count]) => (
              <div key={range} className="flex justify-between items-center">
                <span className="text-gray-700">{range}</span>
                <div className="flex items-center space-x-2">
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-600 h-2 rounded-full"
                      style={{ width: `${(count / properties.length) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600">{count}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Status Distribution</h3>
          <div className="space-y-2">
            {Object.entries(statusCounts).map(([status, count]) => (
              <div key={status} className="flex justify-between items-center">
                <span className="text-gray-700 capitalize">{status}</span>
                <div className="flex items-center space-x-2">
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        status === 'active' ? 'bg-purple-600' :
                        status === 'sold' ? 'bg-red-600' :
                        'bg-yellow-600'
                      }`}
                      style={{ width: `${(count / properties.length) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600">{count}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Location Insights</h3>
          <p className="text-gray-600">Properties span across {new Set(properties.map(p => p.location.split(', ')[1])).size} states</p>
          <p className="text-gray-600 mt-2">Most common state: {Object.entries(properties.reduce((acc, p) => {
            const state = p.location.split(', ')[1];
            acc[state] = (acc[state] || 0) + 1;
            return acc;
          }, {})).sort((a, b) => b[1] - a[1])[0]?.[0] || 'N/A'}</p>
        </div>
      </div>
    </div>
  );
}

function PropertyCard({ property, onEdit, onDelete }) {
  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this property?')) {
      onDelete(property.id);
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden hover:scale-105">
      <img src={property.image} alt={property.title} className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110" />
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 transition-colors duration-200 hover:text-blue-600">{property.title || 'Untitled Property'}</h3>
        <p className="text-gray-600 mb-2">{property.location || 'Location not specified'}</p>
        <p className="text-2xl font-bold text-green-600 mb-4 transition-colors duration-200">${property.price ? property.price.toLocaleString() : 'N/A'}</p>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <span>{property.beds} beds</span>
            <span>{property.baths} baths</span>
            <span>{property.area} sqft</span>
          </div>
        </div>
        <div className="flex justify-between items-center mb-4">
          <span className={`px-2 py-1 text-xs font-medium rounded-full transition-all duration-200 ${
            property.status === 'active' ? 'bg-green-100 text-green-800 hover:bg-green-200' :
            property.status === 'sold' ? 'bg-red-100 text-red-800 hover:bg-red-200' :
            'bg-yellow-100 text-yellow-800 hover:bg-yellow-200'
          }`}>
            {property.status || 'Unknown'}
          </span>
          <div className="flex space-x-2">
            <button onClick={() => onEdit(property)} className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-200 hover:scale-110">
              Edit
            </button>
            <button onClick={handleDelete} className="text-red-600 hover:text-red-800 text-sm font-medium transition-colors duration-200 hover:scale-110">
              Delete
            </button>
          </div>
        </div>
        <button className="w-full text-blue-600 hover:text-blue-800 text-sm font-medium transition-all duration-200 hover:bg-blue-50 py-2 rounded">
          View Details
        </button>
      </div>
    </div>
  );
}

// Export the main component wrapped in ErrorBoundary
function App() {
  return (
    <ErrorBoundary>
      <DashboardApp />
    </ErrorBoundary>
  );
}

// Render the app
ReactDOM.render(<App />, document.getElementById('root'));
