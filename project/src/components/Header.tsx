import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Logo from './Logo';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <NavLink to="/">
            <Logo />
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `font-medium transition-colors ${scrolled
                  ? (isActive ? 'text-amber-600' : 'text-gray-800 hover:text-amber-600')
                  : (isActive ? 'text-amber-500' : 'text-white hover:text-amber-400')
                }`
              }
            >
              {t('header.home')}
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `font-medium transition-colors ${scrolled
                  ? (isActive ? 'text-amber-600' : 'text-gray-800 hover:text-amber-600')
                  : (isActive ? 'text-amber-500' : 'text-white hover:text-amber-400')
                }`
              }
            >
              {t('header.products')}
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `font-medium transition-colors ${scrolled
                  ? (isActive ? 'text-amber-600' : 'text-gray-800 hover:text-amber-600')
                  : (isActive ? 'text-amber-500' : 'text-white hover:text-amber-400')
                }`
              }
            >
              {t('about.about')}
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `font-medium transition-colors ${scrolled
                  ? (isActive ? 'text-amber-600' : 'text-gray-800 hover:text-amber-600')
                  : (isActive ? 'text-amber-500' : 'text-white hover:text-amber-400')
                }`
              }
            >
              {t('header.contact')}
            </NavLink>
            <LanguageSwitcher />
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <LanguageSwitcher />
            <button
              className="text-gray-800"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `font-medium p-2 ${isActive ? 'text-amber-600' : 'text-gray-800 hover:text-amber-600'
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {t('header.home')}
              </NavLink>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  `font-medium p-2 ${isActive ? 'text-amber-600' : 'text-gray-800 hover:text-amber-600'
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {t('header.products')}
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `font-medium p-2 ${isActive ? 'text-amber-600' : 'text-gray-800 hover:text-amber-600'
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {t('header.about')}
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `font-medium p-2 ${isActive ? 'text-amber-600' : 'text-gray-800 hover:text-amber-600'
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {t('header.contact')}
              </NavLink>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;