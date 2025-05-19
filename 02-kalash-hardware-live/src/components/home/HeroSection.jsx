import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function HeroSection() {
  const { t } = useTranslation();

  return (
    <div className="relative bg-primary-800 text-white pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900 to-primary-700 opacity-90"></div>
        <img
          src="https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Hardware Tools Background"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-2xl">
          <motion.h1
            className="text-4xl text-orange-500 md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {t('home.hero.title')}
          </motion.h1>

          <motion.p
            className="text-xl mb-8 text-white opacity-90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t('home.hero.subtitle')}
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to="/products" className="btn bg-accent-500 hover:bg-accent-600 text-white">
              {t('home.hero.shopNow')}
            </Link>
            <Link to="/about" className="btn bg- text-orange-600 font-semibold hover:bg-white/10 border border-white">
              {t('home.hero.learnMore')}
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Curved shape at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="fill-white">
          <path d="M0,64L80,53.3C160,43,320,21,480,32C640,43,800,85,960,90.7C1120,96,1280,64,1360,48L1440,32L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
        </svg>
      </div>
    </div>
  );
}

export default HeroSection;