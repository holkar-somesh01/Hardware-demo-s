// import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-white pt-12 pb-6">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div>
//             <h3 className="text-xl font-semibold mb-4">Kalash Hardware</h3>
//             <p className="text-gray-400 mb-4">
//               Trusted wholesaler of quality hardware since 2018. Providing excellent products and service to our customers.
//             </p>
//             <div className="flex space-x-4">
//               <a href="#" className="text-gray-400 hover:text-white transition-colors">
//                 <Facebook size={20} />
//               </a>
//               <a href="#" className="text-gray-400 hover:text-white transition-colors">
//                 <Instagram size={20} />
//               </a>
//               <a href="#" className="text-gray-400 hover:text-white transition-colors">
//                 <Twitter size={20} />
//               </a>
//             </div>
//           </div>

//           <div>
//             <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
//             <ul className="space-y-2">
//               <li>
//                 <Link to="/" className="text-gray-400 hover:text-white transition-colors">
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/products" className="text-gray-400 hover:text-white transition-colors">
//                   Products
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
//                   About Us
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
//             <ul className="space-y-3">
//               <li className="flex items-start">
//                 <MapPin size={20} className="text-amber-500 mr-2 mt-1 flex-shrink-0" />
//                 <span className="text-gray-400">
//                   Shop 10/11, Anand Plaza, Amarpreet Chowk, Jalna Road,
//                   Chhatrapati Sambhaji Nagar, Maharashtra 431001
//                 </span>
//               </li>
//               <li className="flex items-center">
//                 <Phone size={20} className="text-amber-500 mr-2 flex-shrink-0" />
//                 <a href="tel:+919999999999" className="text-gray-400 hover:text-white transition-colors">
//                   +91 9999 999 999
//                 </a>
//               </li>
//               <li className="flex items-center">
//                 <Mail size={20} className="text-amber-500 mr-2 flex-shrink-0" />
//                 <a href="mailto:info@kalashhardware.com" className="text-gray-400 hover:text-white transition-colors">
//                   info@kalashhardware.com
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500">
//           <p>&copy; {new Date().getFullYear()} Kalash Hardware. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;





import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t, i18n } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* Language Toggle */}
        <div className="text-right mb-4">
          <button
            onClick={() => i18n.changeLanguage('en')}
            className={`px-2 py-1 mx-1 text-sm rounded ${i18n.language === 'en' ? 'bg-amber-500 text-white' : 'bg-gray-700 text-gray-300'}`}
          >
            EN
          </button>
          <button
            onClick={() => i18n.changeLanguage('hi')}
            className={`px-2 py-1 mx-1 text-sm rounded ${i18n.language === 'hi' ? 'bg-amber-500 text-white' : 'bg-gray-700 text-gray-300'}`}
          >
            HI
          </button>
          <button
            onClick={() => i18n.changeLanguage('mr')}
            className={`px-2 py-1 mx-1 text-sm rounded ${i18n.language === 'mr' ? 'bg-amber-500 text-white' : 'bg-gray-700 text-gray-300'}`}
          >
            MR
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">{t('companyName')}</h3>
            <p className="text-gray-400 mb-4">{t('description')}</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">{t('home')}</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors">{t('product.title')}</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">{t('about.about')}</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">{t('contact.contact')}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">{t('contactInfo')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="text-amber-500 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-400">{t('address')}</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-amber-500 mr-2 flex-shrink-0" />
                <a href="tel:+919999999999" className="text-gray-400 hover:text-white transition-colors">{t('phone')}</a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-amber-500 mr-2 flex-shrink-0" />
                <a href="mailto:info@kalashhardware.com" className="text-gray-400 hover:text-white transition-colors">{t('email')}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} {t('companyName')}. {t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
