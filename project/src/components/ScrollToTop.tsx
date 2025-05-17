import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { FaInstagram, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <button
        className={`fixed bottom-4 left-4 bg-amber-600 text-white p-3 rounded-full shadow-lg transition-opacity duration-300 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 ${isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>
      <div className={`fixed bottom-5 right-5 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 z-50 ${isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
        <a href="tel:+917972255278" className="bg-green-500 p-3 rounded-full shadow-lg text-white hover:bg-green-600 transition-all">
          <FaPhoneAlt size={20} />
        </a>
        <a href="https://wa.me/917972255278" target="_blank" rel="noopener noreferrer" className="bg-green-600 p-3 rounded-full shadow-lg text-white hover:bg-green-700 transition-all">
          <FaWhatsapp size={20} />
        </a>
        <a href="https://www.instagram.com/kalashhardware" target="_blank" rel="noopener noreferrer" className="bg-pink-500 p-3 rounded-full shadow-lg text-white hover:bg-pink-600 transition-all">
          <FaInstagram size={20} />
        </a>
      </div>
    </>
  );
};

export default ScrollToTop;