import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function CategorySection() {
  const { t } = useTranslation();
  
  const categories = [
    {
      name: t('categories.handTools'),
      image: 'https://images.pexels.com/photos/175039/pexels-photo-175039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '/products'
    },
    {
      name: t('categories.powerTools'),
      image: 'https://images.pexels.com/photos/8985454/pexels-photo-8985454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '/products'
    },
    {
      name: t('categories.electricalSupplies'),
      image: 'https://images.pexels.com/photos/8473465/pexels-photo-8473465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '/products'
    },
    {
      name: t('categories.plumbing'),
      image: 'https://images.pexels.com/photos/2255459/pexels-photo-2255459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '/products'
    }
  ];
  
  return (
    <section className="py-16 bg-neutral-100">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('home.categories.title')}</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">{t('home.categories.subtitle')}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div 
              key={index}
              className="relative rounded-lg overflow-hidden shadow-md h-64 group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <img 
                src={category.image} 
                alt={category.name} 
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                <Link 
                  to={category.link}
                  className="inline-flex items-center text-white font-medium hover:text-accent-300 transition-colors"
                >
                  {t('home.categories.browse')}
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategorySection;