function Footer() {
  try {
    return (
      <footer className="bg-gray-900 text-white" data-name="footer" data-file="components/Footer.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">PrimeEstates</h3>
              <p className="text-gray-400 mb-6 max-w-md">
                Your trusted partner in real estate. We help you find the perfect property and achieve your real estate goals.
              </p>
              <div className="flex space-x-4">
                <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[var(--primary-color)] transition-colors">
                  <div className="icon-facebook text-lg"></div>
                </button>
                <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[var(--primary-color)] transition-colors">
                  <div className="icon-twitter text-lg"></div>
                </button>
                <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[var(--primary-color)] transition-colors">
                  <div className="icon-instagram text-lg"></div>
                </button>
                <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[var(--primary-color)] transition-colors">
                  <div className="icon-linkedin text-lg"></div>
                </button>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><button onClick={() => window.location.href = 'listings.html'} className="text-gray-400 hover:text-white">Properties</button></li>
                <li><button onClick={() => window.location.href = 'about.html'} className="text-gray-400 hover:text-white">About Us</button></li>
                <li><button onClick={() => window.location.href = 'contact.html'} className="text-gray-400 hover:text-white">Contact</button></li>
                <li><button onClick={() => window.location.href = 'blog.html'} className="text-gray-400 hover:text-white">Blog</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><button className="text-gray-400 hover:text-white">Buy Property</button></li>
                <li><button className="text-gray-400 hover:text-white">Sell Property</button></li>
                <li><button className="text-gray-400 hover:text-white">Rent Property</button></li>
                <li><button className="text-gray-400 hover:text-white">Property Valuation</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center">
                  <div className="icon-phone text-lg mr-2"></div>
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <div className="icon-mail text-lg mr-2"></div>
                  <span>info@primeestates.com</span>
                </div>
                <div className="flex items-center">
                  <div className="icon-map-pin text-lg mr-2"></div>
                  <span>123 Real Estate Ave, City, State 12345</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 PrimeEstates. All rights reserved. | Privacy Policy | Terms of Service
            </p>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}
