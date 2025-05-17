import { Mail, ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface ProductProps {
  product: {
    id: number;
    name: string;
    image: string;
    description: string;
  };
}

const ProductCard = ({ product }: ProductProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const img = new Image();
    img.src = product.image;
    img.onload = () => setImageLoaded(true);
  }, [product.image]);

  const handleEnquire = () => {
    const subject = encodeURIComponent(`${t('productCard.enquirySubject')} ${product.name}`);
    const body = encodeURIComponent(`${t('productCard.enquiryBody', { name: product.name })}`);
    window.location.href = `mailto:info@kalashhardware.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transition-all hover:shadow-lg transform hover:scale-105">
      <div className="relative aspect-w-4 aspect-h-3">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        )}
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-60 object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="flex gap-2">
          <button
            onClick={handleEnquire}
            className="flex-1 flex items-center justify-center bg-amber-600 text-white py-2 rounded-md hover:bg-amber-700 transition-colors"
          >
            <Mail className="mr-2" size={18} /> {t('productCard.enquire')}
          </button>
          <button
            onClick={() => window.open(product.image, '_blank')}
            className="p-2 text-gray-600 hover:text-amber-600 transition-colors"
            aria-label={t('productCard.viewFullImage')}
          >
            <ExternalLink size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
