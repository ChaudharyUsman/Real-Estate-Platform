function CallToAction() {
  try {
    return (
      <section className="py-16 bg-[var(--primary-color)]" data-name="call-to-action" data-file="components/CallToAction.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Sell Your Property?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join thousands of property owners who trust PrimeEstates to sell their homes faster and for the best price.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.location.href = 'dashboard.html'}
                className="bg-white text-[var(--primary-color)] px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200"
              >
                List Your Property
              </button>
              <button 
                onClick={() => window.location.href = 'contact.html'}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[var(--primary-color)] transition-colors duration-200"
              >
                Get Free Valuation
              </button>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="icon-trending-up text-2xl text-white"></div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Maximum Exposure</h3>
                <p className="text-blue-100">Your property seen by thousands of potential buyers</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="icon-users text-2xl text-white"></div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Expert Support</h3>
                <p className="text-blue-100">Professional guidance throughout the selling process</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="icon-dollar-sign text-2xl text-white"></div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Best Price</h3>
                <p className="text-blue-100">Advanced pricing tools to maximize your return</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('CallToAction component error:', error);
    return null;
  }
}