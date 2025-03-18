import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Menu, X, Leaf, Phone } from 'lucide-react';

const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-md">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="text-xl font-bold text-gray-800">AAAME Lawn & Snow</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
              <Link to="/" className="text-gray-600 hover:text-green-600">Home</Link>
              <Link to="/about" className="text-gray-600 hover:text-green-600">About</Link>
              <Link to="/services" className="text-gray-600 hover:text-green-600">Services</Link>
              <Link to="/contact" className="text-gray-600 hover:text-green-600">Contact</Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-600"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 space-y-4">
              <Link to="/" className="block text-gray-600 hover:text-green-600">Home</Link>
              <Link to="/about" className="block text-gray-600 hover:text-green-600">About</Link>
              <Link to="/services" className="block text-gray-600 hover:text-green-600">Services</Link>
              <Link to="/contact" className="block text-gray-600 hover:text-green-600">Contact</Link>
            </div>
          )}
        </nav>
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">AAAME Lawn & Snow LLC</h3>
              <p className="text-gray-300">Professional lawn care and snow removal services for your home or business.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/services" className="text-gray-300 hover:text-white">Services</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="h-5 w-5" />
                <span>(555) 123-4567</span>
              </div>
              <p className="text-gray-300 mt-2">Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p className="text-gray-300">Saturday: 9:00 AM - 4:00 PM</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
            <p>&copy; {new Date().getFullYear()} AAAME Lawn & Snow LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;