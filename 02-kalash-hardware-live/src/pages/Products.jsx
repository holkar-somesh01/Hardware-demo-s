import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import PageTransition from '../components/common/PageTransition';
import ProductCard from '../components/products/ProductCard';
import ProductFilter from '../components/products/ProductFilter';
import products from '../data/products';

function Products() {
  const { t } = useTranslation();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [filters, setFilters] = useState({
    category: 'all',
    priceRange: [0, 10000],
    availability: 'all'
  });

  useEffect(() => {
    applyFilters();
  }, [filters]);

  const applyFilters = () => {
    let result = [...products];

    // Filter by category
    if (filters.category !== 'all') {
      result = result.filter(product => product.category === filters.category);
    }

    // Filter by price range
    result = result.filter(product =>
      product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]
    );

    // Filter by availability
    if (filters.availability !== 'all') {
      result = result.filter(product => product.inStock);
    }

    setFilteredProducts(result);
  };

  const handleFilterChange = (newFilters) => {
    setFilters({ ...filters, ...newFilters });
  };

  return (
    <PageTransition>
      <Helmet>
        <title>Kalash Hardware - {t('products.title')}</title>
        <meta name="description" content={t('products.metaDescription')} />
      </Helmet>

      <div className="bg-primary-800 text-white py-16 pt-32">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">{t('products.title')}</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">{t('products.subtitle')}</p>
        </div>
      </div>

      <div className="container mx-auto py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="w-full lg:w-1/4">
            <ProductFilter onFilterChange={handleFilterChange} />
          </div>

          {/* Product Grid */}
          <div className="w-full lg:w-3/4">
            {filteredProducts.length === 0 ? (
              <div className="text-center p-12 bg-white rounded-lg shadow">
                <svg className="w-16 h-16 mx-auto text-neutral-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 13h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-bold mb-2">{t('products.noResults')}</h3>
                <p className="text-neutral-600">{t('products.tryDifferentFilters')}</p>
              </div>
            ) : (
              <>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold">
                    {t('products.showing')} {filteredProducts.length} {t('products.items')}
                  </h2>
                  <div className="flex items-center">
                    <label htmlFor="sort" className="mr-2 text-neutral-600">
                      {t('products.sortBy')}:
                    </label>
                    <select
                      id="sort"
                      className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                      <option value="price-asc">{t('products.priceLowToHigh')}</option>
                      <option value="price-desc">{t('products.priceHighToLow')}</option>
                      <option value="name-asc">{t('products.nameAZ')}</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

export default Products;