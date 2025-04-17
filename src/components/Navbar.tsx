
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <span className="text-blue-800 text-xl font-playfair font-bold">EventSpace</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Главная
            </Link>
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
                Помещения
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 top-full w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-2">
                  <Link to="/#venues" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                    Все помещения
                  </Link>
                  <Link to="/#venues" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                    Конференц-залы
                  </Link>
                  <Link to="/#venues" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                    Банкетные залы
                  </Link>
                  <Link to="/#venues" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                    Открытые площадки
                  </Link>
                </div>
              </div>
            </div>
            <Link to="/#about" className="text-gray-700 hover:text-blue-600 transition-colors">
              О нас
            </Link>
            <Link to="/#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Контакты
            </Link>
          </nav>

          <div className="hidden md:flex items-center">
            <Button variant="default" className="bg-blue-700 hover:bg-blue-800">
              Найти помещение
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700 hover:text-blue-600 transition-colors"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link
              to="/"
              className="block text-gray-700 hover:text-blue-600 transition-colors"
              onClick={toggleMenu}
            >
              Главная
            </Link>
            <div>
              <button className="flex items-center text-gray-700 hover:text-blue-600 transition-colors w-full text-left">
                Помещения
                <ChevronDown className="ml-2 h-4 w-4" />
              </button>
              <div className="pl-4 mt-2 space-y-2">
                <Link
                  to="/#venues"
                  className="block text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={toggleMenu}
                >
                  Все помещения
                </Link>
                <Link
                  to="/#venues"
                  className="block text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={toggleMenu}
                >
                  Конференц-залы
                </Link>
                <Link
                  to="/#venues"
                  className="block text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={toggleMenu}
                >
                  Банкетные залы
                </Link>
                <Link
                  to="/#venues"
                  className="block text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={toggleMenu}
                >
                  Открытые площадки
                </Link>
              </div>
            </div>
            <Link
              to="/#about"
              className="block text-gray-700 hover:text-blue-600 transition-colors"
              onClick={toggleMenu}
            >
              О нас
            </Link>
            <Link
              to="/#contact"
              className="block text-gray-700 hover:text-blue-600 transition-colors"
              onClick={toggleMenu}
            >
              Контакты
            </Link>
            <Button variant="default" className="w-full bg-blue-700 hover:bg-blue-800">
              Найти помещение
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
