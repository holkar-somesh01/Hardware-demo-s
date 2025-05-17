import { useState } from 'react';
import { categories } from '../data/products';
import ProductCategory from '../components/ProductCategory';
import { Search } from 'lucide-react';
import { useTranslation } from 'react-i18next';


const ProductsPage = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <section
        className="relative py-20 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/162539/architecture-building-workshop-interior-design-162539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">{t('product.title')}</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">{t('product.subtitle')}</p>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-10 max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder={t('product.searchPlaceholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-3 px-4 pl-12 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
              <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredCategories.map(category => (
              <ProductCategory key={category.id} category={category} />
            ))}
          </div>

          {filteredCategories.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-600">{t('product.noCategories')}</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
