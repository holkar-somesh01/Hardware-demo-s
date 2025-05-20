import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import products from '../../data/products';

function FeaturedProducts() {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  // Get featured products (first 4 products)
  const featuredProducts = products.slice(0, 4);

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('home.featuredProducts.title')}</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">{t('home.featuredProducts.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              className="product-card group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name[currentLanguage]}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.sale && (
                  <div className="absolute top-4 right-4 bg-accent-500 text-white text-sm font-bold py-1 px-2 rounded">
                    {t('products.sale')}
                  </div>
                )}
              </div>

              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{product.name[currentLanguage]}</h3>
                <p className="text-neutral-600 mb-3 line-clamp-2">{product.description[currentLanguage]}</p>

                <div className="flex justify-between items-center">
                  {/* <span className="text-xl font-bold text-primary-800">₹{product.price.toLocaleString()}</span> */}
                  <Link
                    to={`/products`}
                    className="text-accent-500 ml-6 hover:text-accent-600 font-medium flex items-center"
                  >
                    <span> {t('common.viewDetails')}</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/products" className="btn btn-primary">
            {t('home.featuredProducts.viewAll')}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;