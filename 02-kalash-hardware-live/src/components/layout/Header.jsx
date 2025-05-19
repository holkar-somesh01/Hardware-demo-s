// import { useState, useEffect } from 'react';
// import { NavLink, Link } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';
// import LanguageSwitcher from '../common/LanguageSwitcher';

// function Header() {
//   const { t } = useTranslation();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   // Handle scroll effect for header
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const closeMenu = () => {
//     setIsMenuOpen(false);
//   };

//   return (
//     <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
//       <div className="container mx-auto flex justify-between items-center">
//         <Link to="/" className="text-2xl font-bold text-primary-800 flex items-center">
//           <span className="text-accent-500 mr-1">Kalash</span> Hardware
//         </Link>

//         {/* Desktop Menu */}
//         <nav className="hidden md:flex items-center space-x-8">
//           <NavLink
//             to="/"
//             className={({ isActive }) =>
//               isActive ? 'text-accent-600 font-medium' : isScrolled ? "text-black hover:text-accent-500 transition-colors" : 'text-white hover:text-accent-500 transition-colors'
//             }
//           >
//             {t('nav.home')}
//           </NavLink>
//           <NavLink
//             to="/products"
//             className={({ isActive }) =>
//               isActive ? 'text-accent-600 font-medium' : isScrolled ? "text-black hover:text-accent-500 transition-colors" : 'text-white hover:text-accent-500 transition-colors'
//             }
//           >
//             {t('nav.products')}
//           </NavLink>
//           <NavLink
//             to="/about"
//             className={({ isActive }) =>
//               isActive ? 'text-accent-600 font-medium' : isScrolled ? "text-black hover:text-accent-500 transition-colors" : 'text-white hover:text-accent-500 transition-colors'
//             }
//           >
//             {t('nav.about')}
//           </NavLink>
//           <NavLink
//             to="/contact"
//             className={({ isActive }) =>
//               isActive ? 'text-accent-600 font-medium' : isScrolled ? "text-black hover:text-accent-500 transition-colors" : 'text-white hover:text-accent-500 transition-colors'
//             }
//           >
//             {t('nav.contact')}
//           </NavLink>

//           <LanguageSwitcher isScrolled={isScrolled} />
//         </nav>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden flex items-center space-x-4">
//           <LanguageSwitcher isScrolled={isScrolled} />
//           <button
//             className="text-neutral-700 focus:outline-none"
//             onClick={toggleMenu}
//             aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
//               {isMenuOpen ? (
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               ) : (
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//               )}
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-md transition-transform duration-300 transform ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
//         <nav className="container mx-auto py-4 flex flex-col space-y-4">
//           <NavLink
//             to="/"
//             className={({ isActive }) =>
//               isActive ? 'text-accent-600 font-medium px-4 py-2' : 'text-neutral-700 hover:text-accent-500 px-4 py-2 transition-colors'
//             }
//             onClick={closeMenu}
//           >
//             {t('nav.home')}
//           </NavLink>
//           <NavLink
//             to="/products"
//             className={({ isActive }) =>
//               isActive ? 'text-accent-600 font-medium px-4 py-2' : 'text-neutral-700 hover:text-accent-500 px-4 py-2 transition-colors'
//             }
//             onClick={closeMenu}
//           >
//             {t('nav.products')}
//           </NavLink>
//           <NavLink
//             to="/about"
//             className={({ isActive }) =>
//               isActive ? 'text-accent-600 font-medium px-4 py-2' : 'text-neutral-700 hover:text-accent-500 px-4 py-2 transition-colors'
//             }
//             onClick={closeMenu}
//           >
//             {t('nav.about')}
//           </NavLink>
//           <NavLink
//             to="/contact"
//             className={({ isActive }) =>
//               isActive ? 'text-accent-600 font-medium px-4 py-2' : 'text-neutral-700 hover:text-accent-500 px-4 py-2 transition-colors'
//             }
//             onClick={closeMenu}
//           >
//             {t('nav.contact')}
//           </NavLink>
//         </nav>
//       </div>
//     </header>
//   );
// }

// export default Header;

















import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../common/LanguageSwitcher';

function Header() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on outside click (optional)
  useEffect(() => {
    const handleClickOutside = (e) => {
      const menu = document.getElementById('mobileMenu');
      if (menu && !menu.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  const navLinkClass = (isActive, isScrolled) =>
    isActive
      ? 'text-accent-600 font-medium'
      : isScrolled
        ? 'text-black hover:text-accent-500 transition-colors'
        : 'text-white hover:text-accent-500 transition-colors';

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
        }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 md:px-0">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold flex items-center text-primary-800">
          <span className="text-accent-500 mr-1">Kalash</span> Hardware
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {['home', 'products', 'about', 'contact'].map((key) => (
            <NavLink
              key={key}
              to={`/${key === 'home' ? '' : key}`}
              className={({ isActive }) => navLinkClass(isActive, isScrolled)}
            >
              {t(`nav.${key}`)}
            </NavLink>
          ))}
          <LanguageSwitcher isScrolled={isScrolled} />
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            className="text-neutral-700 focus:outline-none"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobileMenu"
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-md transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-screen' : 'max-h-0'
          }`}
      >
        <nav className="flex flex-col px-4 py-4 space-y-4">
          {['home', 'products', 'about', 'contact'].map((key) => (
            <NavLink
              key={key}
              to={`/${key === 'home' ? '' : key}`}
              className={({ isActive }) =>
                isActive
                  ? 'text-accent-600 font-medium px-2 py-1'
                  : 'text-neutral-700 hover:text-accent-500 px-2 py-1 transition-colors'
              }
              onClick={() => setIsMenuOpen(false)}
            >
              {t(`nav.${key}`)}
            </NavLink>
          ))}

          {/* Language Switcher for Mobile */}
          <div className="pt-2 border-t">
            <LanguageSwitcher isScrolled={true} />
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
