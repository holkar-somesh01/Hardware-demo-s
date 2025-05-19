// import { useState, useRef, useEffect } from 'react';
// import { useTranslation } from 'react-i18next';

// function LanguageSwitcher({ isScrolled }) {
//   const { i18n } = useTranslation();
//   const [isOpen, setIsOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   const languages = [
//     { code: 'en', name: 'English', flag: '🇺🇸' },
//     { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
//     { code: 'mr', name: 'मराठी', flag: '🇮🇳' }
//   ];

//   const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   const changeLanguage = (langCode) => {
//     i18n.changeLanguage(langCode);
//     setIsOpen(false);
//   };

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     }

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   return (
//     <div className="relative" ref={dropdownRef}>
//       <button
//         className={`flex items-center space-x-1 ${isScrolled ? "text-black" : "text-white"}  hover:text-accent-500 transition-colors focus:outline-none`}
//         onClick={toggleDropdown}
//         aria-expanded={isOpen}
//         aria-haspopup="true"
//       >
//         <span className="mr-1">{currentLanguage.flag}</span>
//         <span className="hidden md:inline">{currentLanguage.name}</span>
//         <svg
//           className={`h-4 w-4 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 20 20"
//           fill="currentColor"
//         >
//           <path
//             fillRule="evenodd"
//             d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//             clipRule="evenodd"
//           />
//         </svg>
//       </button>

//       {isOpen && (
//         <div className="absolute mt-2 right-0 w-40 bg-white rounded-md shadow-lg z-50 overflow-hidden">
//           <ul className="py-1">
//             {languages.map((language) => (
//               <li key={language.code}>
//                 <button
//                   className={`w-full text-left px-4 py-2 text-sm ${i18n.language === language.code
//                     ? 'bg-primary-50 text-primary-700'
//                     : 'text-neutral-700 hover:bg-neutral-100'
//                     }`}
//                   onClick={() => changeLanguage(language.code)}
//                 >
//                   <span className="mr-2">{language.flag}</span>
//                   {language.name}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }

// export default LanguageSwitcher;










import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher({ isScrolled }) {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
    { code: 'mr', name: 'मराठी', flag: '🇮🇳' }
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const toggleDropdown = () => setIsOpen(prev => !prev);
  const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        onClick={toggleDropdown}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        className={`flex items-center gap-1 px-2 py-1 rounded-md transition-colors duration-150 ${isScrolled ? 'text-black hover:text-accent-500' : 'text-white hover:text-accent-500'
          }`}
      >
        <span>{currentLanguage.flag}</span>
        <span className="hidden md:inline">{currentLanguage.name}</span>
        <svg
          className={`h-4 w-4 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        // <ul
        //   role="listbox"
        //   className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-50 overflow-hidden border border-gray-200"
        // >
        <ul
          role="listbox"
          className="absolute right-0 mt-2 md:mt-2 md:left-3 w-40 bg-white rounded-md shadow-lg z-50 overflow-hidden border border-gray-200
             md:bottom-auto md:top-full bottom-full mb-2"
        >

          {languages.map((language) => (
            <li key={language.code}>
              <button
                role="option"
                aria-selected={i18n.language === language.code}
                onClick={() => changeLanguage(language.code)}
                className={`w-full text-left px-4 py-2 text-sm transition-colors ${i18n.language === language.code
                  ? 'bg-primary-50 text-primary-700'
                  : 'text-neutral-700 hover:bg-neutral-100'
                  }`}
              >
                <span className="mr-2">{language.flag}</span>
                {language.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default LanguageSwitcher;
