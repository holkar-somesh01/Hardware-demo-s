import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिंदी' },
    { code: 'mr', name: 'मराठी' }
  ];

  return (
    <div className="relative group">
      <button className="flex items-center text-gray-800 hover:text-amber-600 transition-colors">
        <Globe size={20} className="mr-1" />
        <span className="hidden md:inline">{languages.find(lang => lang.code === i18n.language)?.name || 'English'}</span>
      </button>
      <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => i18n.changeLanguage(lang.code)}
            className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${i18n.language === lang.code ? 'text-amber-600 font-medium' : 'text-gray-700'
              }`}
          >
            {lang.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;