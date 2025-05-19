import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function ProductFilter({ onFilterChange }) {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [availability, setAvailability] = useState('all');
  
  const categories = [
    { id: 'all', name: t('filters.allCategories') },
    { id: 'handTools', name: t('categories.handTools') },
    { id: 'powerTools', name: t('categories.powerTools') },
    { id: 'electricalSupplies', name: t('categories.electricalSupplies') },
    { id: 'plumbing', name: t('categories.plumbing') }
  ];
  
  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    onFilterChange({ category, priceRange, availability });
  };
  
  const handlePriceChange = (e) => {
    const value = parseInt(e.target.value);
    setPriceRange([0, value]);
    onFilterChange({ category: selectedCategory, priceRange: [0, value], availability });
  };
  
  const handleAvailabilityChange = (e) => {
    const value = e.target.value;
    setAvailability(value);
    onFilterChange({ category: selectedCategory, priceRange, availability: value });
  };
  
  return (
    <div className="bg-white p-5 rounded-lg shadow-md">
      <h3 className="text-lg font-bold mb-4 border-b pb-2">{t('filters.title')}</h3>
      
      {/* Category Filter */}
      <div className="mb-6">
        <h4 className="font-medium mb-2">{t('filters.category')}</h4>
        <div className="space-y-2">
          {categories.map(category => (
            <div key={category.id} className="flex items-center">
              <input
                type="radio"
                id={`category-${category.id}`}
                name="category"
                value={category.id}
                checked={selectedCategory === category.id}
                onChange={handleCategoryChange}
                className="mr-2"
              />
              <label htmlFor={`category-${category.id}`} className="text-neutral-700">
                {category.name}
              </label>
            </div>
          ))}
        </div>
      </div>
      
      {/* Price Range Filter */}
      <div className="mb-6">
        <h4 className="font-medium mb-2">{t('filters.priceRange')}</h4>
        <input
          type="range"
          min="0"
          max="10000"
          step="500"
          value={priceRange[1]}
          onChange={handlePriceChange}
          className="w-full"
        />
        <div className="flex justify-between mt-2 text-sm text-neutral-600">
          <span>₹0</span>
          <span>₹{priceRange[1].toLocaleString()}</span>
        </div>
      </div>
      
      {/* Availability Filter */}
      <div className="mb-4">
        <h4 className="font-medium mb-2">{t('filters.availability')}</h4>
        <div className="space-y-2">
          <div className="flex items-center">
            <input
              type="radio"
              id="availability-all"
              name="availability"
              value="all"
              checked={availability === 'all'}
              onChange={handleAvailabilityChange}
              className="mr-2"
            />
            <label htmlFor="availability-all" className="text-neutral-700">
              {t('filters.all')}
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="availability-inStock"
              name="availability"
              value="inStock"
              checked={availability === 'inStock'}
              onChange={handleAvailabilityChange}
              className="mr-2"
            />
            <label htmlFor="availability-inStock" className="text-neutral-700">
              {t('filters.inStock')}
            </label>
          </div>
        </div>
      </div>
      
      {/* Reset Filters Button */}
      <button 
        className="w-full btn btn-outline mt-4"
        onClick={() => {
          setSelectedCategory('all');
          setPriceRange([0, 10000]);
          setAvailability('all');
          onFilterChange({ category: 'all', priceRange: [0, 10000], availability: 'all' });
        }}
      >
        {t('filters.reset')}
      </button>
    </div>
  );
}

export default ProductFilter;