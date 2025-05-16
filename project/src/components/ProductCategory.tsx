// import { Link } from 'react-router-dom';
// import { ChevronRight } from 'lucide-react';

// interface CategoryProps {
//   category: {
//     id: string;
//     name: string;
//     image: string;
//     description: string;
//   };
// }

// const ProductCategory = ({ category }: CategoryProps) => {
//   return (
//     <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 hover:shadow-lg">
//       <img 
//         src={category.image} 
//         alt={category.name} 
//         className="w-full h-48 object-cover"
//       />
//       <div className="p-6">
//         <h3 className="text-xl font-semibold text-gray-800 mb-2">{category.name}</h3>
//         <p className="text-gray-600 mb-4">{category.description}</p>
//         <Link 
//           to={`/products/${category.id}`}
//           className="inline-flex items-center text-amber-600 font-medium hover:text-amber-700 transition-colors"
//         >
//           View Products <ChevronRight className="ml-1" size={18} />
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default ProductCategory;






import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface CategoryProps {
  category: {
    id: string;
    name: string;
    image: string;
    description: string;
  };
}

const ProductCategory = ({ category }: CategoryProps) => {
  const { t } = useTranslation();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 hover:shadow-lg">
      <img
        src={category.image}
        alt={category.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{category.name}</h3>
        <p className="text-gray-600 mb-4">{category.description}</p>
        <Link
          to={`/products/${category.id}`}
          className="inline-flex items-center text-amber-600 font-medium hover:text-amber-700 transition-colors"
        >
          {t('productCategory.viewProducts')} <ChevronRight className="ml-1" size={18} />
        </Link>
      </div>
    </div>
  );
};

export default ProductCategory;
