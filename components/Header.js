function Header() {
  try {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    
    const navigateToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = `index.html#${sectionId}`;
      }
      setIsMenuOpen(false);
    };

    const navigateToPage = (page) => {
      window.location.href = page;
    };

    return (
      <header className="bg-white shadow-sm sticky top-0 z-50" data-name="header" data-file="components/Header.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-[var(--primary-color)]">PrimeEstates</h1>
              </div>
            </div>

            <nav className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button onClick={() => navigateToSection('home')} className="text-[var(--text-primary)] hover:text-[var(--primary-color)] px-3 py-2 text-sm font-medium">
                  Home
                </button>
                <button onClick={() => navigateToPage('listings.html')} className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] px-3 py-2 text-sm font-medium">
                  Properties
                </button>
                <button onClick={() => navigateToPage('about.html')} className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] px-3 py-2 text-sm font-medium">
                  About
                </button>
                <button onClick={() => navigateToPage('contact.html')} className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] px-3 py-2 text-sm font-medium">
                  Contact
                </button>
              </div>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <button onClick={() => navigateToPage('login.html')} className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] px-3 py-2 text-sm font-medium">
                Sign In
              </button>
              <button onClick={() => navigateToPage('dashboard.html')} className="btn-primary">
                List Property
              </button>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-[var(--text-secondary)] hover:text-[var(--primary-color)]"
              >
                <div className={`icon-menu text-xl ${isMenuOpen ? 'hidden' : 'block'}`}></div>
                <div className={`icon-x text-xl ${isMenuOpen ? 'block' : 'hidden'}`}></div>
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-[var(--border-color)]">
                <button onClick={() => navigateToSection('home')} className="block px-3 py-2 text-base font-medium text-[var(--text-primary)] hover:text-[var(--primary-color)]">
                  Home
                </button>
                <button onClick={() => navigateToPage('listings.html')} className="block px-3 py-2 text-base font-medium text-[var(--text-secondary)] hover:text-[var(--primary-color)]">
                  Properties
                </button>
                <button onClick={() => navigateToPage('about.html')} className="block px-3 py-2 text-base font-medium text-[var(--text-secondary)] hover:text-[var(--primary-color)]">
                  About
                </button>
                <button onClick={() => navigateToPage('contact.html')} className="block px-3 py-2 text-base font-medium text-[var(--text-secondary)] hover:text-[var(--primary-color)]">
                  Contact
                </button>
                <button onClick={() => navigateToPage('login.html')} className="block px-3 py-2 text-base font-medium text-[var(--text-secondary)] hover:text-[var(--primary-color)]">
                  Sign In
                </button>
                <button onClick={() => navigateToPage('dashboard.html')} className="block px-3 py-2 text-base font-medium text-[var(--primary-color)]">
                  List Property
                </button>
              </div>
            </div>
          )}
        </div>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}