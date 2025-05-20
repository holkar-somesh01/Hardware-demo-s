import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

function ProductCard({ product }) {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <motion.div
      className="product-card group"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name[currentLanguage]}
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.sale && (
          <div className="absolute top-4 right-4 bg-accent-500 text-white text-sm font-bold py-1 px-2 rounded">
            Sale
          </div>
        )}
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold mb-2">{product.name[currentLanguage]}</h3>
        <p className="text-neutral-600 mb-3 line-clamp-2">{product.description[currentLanguage]}</p>

        <div className="flex justify-between items-center">
          {/* <span className="text-xl font-bold text-primary-800">₹{product.price.toLocaleString()}</span> */}
          <button className="btn btn-accent px-3 py-2 text-sm">
            {product.inStock ? 'View Details' : 'Out of Stock'}
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default ProductCard;