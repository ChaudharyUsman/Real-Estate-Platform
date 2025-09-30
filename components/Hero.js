
function Hero() {
  try {
    return (
      <section id="home" className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 lg:py-32" data-name="hero" data-file="components/Hero.js">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-shadow">
              Find Your Dream Home
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Discover premium properties in the best locations. Your perfect home is just a search away.
            </p>
            
            <div className="max-w-4xl mx-auto">
              <SearchForm />
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex items-center justify-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                  <div className="icon-home text-xl text-white"></div>
                </div>
                <div>
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-blue-200">Properties</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                  <div className="icon-users text-xl text-white"></div>
                </div>
                <div>
                  <div className="text-2xl font-bold">1000+</div>
                  <div className="text-blue-200">Happy Clients</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                  <div className="icon-map-pin text-xl text-white"></div>
                </div>
                <div>
                  <div className="text-2xl font-bold">50+</div>
                  <div className="text-blue-200">Locations</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return null;
  }
}
