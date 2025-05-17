import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Mail } from 'lucide-react';
import { categories, productsByCategory } from '../data/products';
import ProductCard from '../components/ProductCard';
import { useTranslation } from 'react-i18next';

const ProductCategoryPage = () => {
  const { t } = useTranslation();
  const { category } = useParams<{ category: string }>();

  const categoryData = categories.find(c => c.id === category);
  const products = productsByCategory[category || ''] || [];

  if (!categoryData) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('category.notFound')}</h2>
        <Link
          to="/products"
          className="inline-flex items-center text-amber-600 font-medium hover:text-amber-700"
        >
          <ArrowLeft className="mr-2" size={18} /> {t('category.backToAll')}
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Category Header */}
      <section
        className="relative py-20 bg-cover bg-center"
        style={{ backgroundImage: `url('${categoryData.image}')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="container mx-auto px-4 relative z-10">
          <Link
            to="/products"
            className="inline-flex items-center text-white font-medium hover:text-amber-300 mb-4"
          >
            <ArrowLeft className="mr-2" size={18} /> {t('category.backToAll')}
          </Link>
          <h1 className="text-4xl font-bold text-white mb-4">{categoryData.name}</h1>
          <p className="text-xl text-gray-200 max-w-2xl">{categoryData.description}</p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {products.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-600 mb-4">{t('category.noProducts')}</p>
              <Link
                to="/contact"
                className="inline-flex items-center bg-amber-600 text-white px-4 py-2 rounded-md hover:bg-amber-700 transition-colors"
              >
                <Mail className="mr-2" size={18} /> {t('category.contactUs')}
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProductCategoryPage;
