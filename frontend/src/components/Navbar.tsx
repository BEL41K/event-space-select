
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import ProfileDropdown from './ProfileDropdown';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Scroll to section helper function
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth'
      });
    }
    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  // Handle top of page navigation
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center" onClick={scrollToTop}>
            <span className="text-blue-800 text-xl font-playfair font-bold">EventSpace</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={scrollToTop} 
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Главная
            </button>
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
                Помещения
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 top-full w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-2">
                  <button 
                    onClick={() => scrollToSection('venues')}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 w-full text-left"
                  >
                    Все помещения
                  </button>
                  <button 
                    onClick={() => scrollToSection('venues')}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 w-full text-left"
                  >
                    Конференц-залы
                  </button>
                  <button 
                    onClick={() => scrollToSection('venues')}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 w-full text-left"
                  >
                    Банкетные залы
                  </button>
                  <button 
                    onClick={() => scrollToSection('venues')}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 w-full text-left"
                  >
                    Открытые площадки
                  </button>
                </div>
              </div>
            </div>
            <button 
              onClick={() => scrollToSection('why-us')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              О нас
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Контакты
            </button>
          </nav>

          <div className="hidden md:flex items-center">
            <ProfileDropdown />
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
            <button
              className="block text-gray-700 hover:text-blue-600 transition-colors w-full text-left"
              onClick={scrollToTop}
            >
              Главная
            </button>
            <div>
              <button className="flex items-center text-gray-700 hover:text-blue-600 transition-colors w-full text-left">
                Помещения
                <ChevronDown className="ml-2 h-4 w-4" />
              </button>
              <div className="pl-4 mt-2 space-y-2">
                <button
                  onClick={() => scrollToSection('venues')}
                  className="block text-gray-700 hover:text-blue-600 transition-colors w-full text-left"
                >
                  Все помещения
                </button>
                <button
                  onClick={() => scrollToSection('venues')}
                  className="block text-gray-700 hover:text-blue-600 transition-colors w-full text-left"
                >
                  Конференц-залы
                </button>
                <button
                  onClick={() => scrollToSection('venues')}
                  className="block text-gray-700 hover:text-blue-600 transition-colors w-full text-left"
                >
                  Банкетные залы
                </button>
                <button
                  onClick={() => scrollToSection('venues')}
                  className="block text-gray-700 hover:text-blue-600 transition-colors w-full text-left"
                >
                  Открытые площадки
                </button>
              </div>
            </div>
            <button
              onClick={() => scrollToSection('why-us')}
              className="block text-gray-700 hover:text-blue-600 transition-colors w-full text-left"
            >
              О нас
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block text-gray-700 hover:text-blue-600 transition-colors w-full text-left"
            >
              Контакты
            </button>
            <div className="pt-2">
              <ProfileDropdown />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
