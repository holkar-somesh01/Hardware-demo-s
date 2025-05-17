// import { ChevronRight, Clock, Star, Truck } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import ProductCategory from '../components/ProductCategory';
// import { categories } from '../data/products';
// import ReviewCard from '../components/ReviewCard';
// import { reviews } from '../data/reviews';

// const HomePage = () => {
//   return (
//     <div>
//       {/* Hero Section */}
//       <section
//         className="relative h-screen bg-cover bg-center flex items-center"
//         style={{ backgroundImage: "url('https://images.pexels.com/photos/1029243/pexels-photo-1029243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}
//       >
//         <div className="absolute inset-0 bg-black bg-opacity-60"></div>
//         <div className="container mx-auto px-4 relative z-10">
//           <div className="max-w-2xl">
//             <div className="inline-block bg-amber-600 text-white px-4 py-1 text-sm font-semibold rounded-full mb-4">
//               Established 2018
//             </div>
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
//               Quality Hardware Solutions for Every Project
//             </h1>
//             <p className="text-xl text-gray-200 mb-8">
//               Maharashtra's trusted wholesaler of brass, aluminum, sliding door, and plastic hardware.
//             </p>
//             <div className="flex flex-wrap gap-4">
//               <Link
//                 to="/products"
//                 className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-md font-medium transition-colors flex items-center"
//               >
//                 Browse Products <ChevronRight className="ml-2" size={18} />
//               </Link>
//               <Link
//                 to="/contact"
//                 className="bg-transparent hover:bg-white text-white hover:text-amber-600 px-6 py-3 rounded-md font-medium border-2 border-white transition-colors"
//               >
//                 Contact Us
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Product Categories */}
//       <section className="py-16 bg-gray-100">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Products</h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               Browse our extensive range of high-quality hardware products for all your construction and renovation needs.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {categories.map((category) => (
//               <ProductCategory key={category.id} category={category} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//             <div>
//               <h2 className="text-3xl font-bold text-gray-800 mb-6">Quality Products & Service</h2>
//               <p className="text-gray-600 mb-6">
//                 At Kalash Hardware, we pride ourselves on offering premium hardware solutions paired with exceptional customer service. Our commitment to quality and reliability has made us a trusted partner for contractors, builders, and homeowners alike.
//               </p>

//               <div className="space-y-4">
//                 <div className="flex items-start">
//                   <div className="bg-amber-100 p-3 rounded-full mr-4">
//                     <Truck className="text-amber-600" size={24} />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-gray-800 mb-1">Same-Day Delivery Available</h3>
//                     <p className="text-gray-600">
//                       For orders placed before 12 PM within Chhatrapati Sambhaji Nagar.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start">
//                   <div className="bg-amber-100 p-3 rounded-full mr-4">
//                     <Clock className="text-amber-600" size={24} />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-gray-800 mb-1">Extended Business Hours</h3>
//                     <p className="text-gray-600">
//                       Open daily, including Sundays to better serve our customers.
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <Link
//                 to="/about"
//                 className="inline-flex items-center text-amber-600 font-medium mt-6 hover:text-amber-700 transition-colors"
//               >
//                 Learn more about us <ChevronRight className="ml-1" size={18} />
//               </Link>
//             </div>

//             <div>
//               <img
//                 src="https://images.pexels.com/photos/5767969/pexels-photo-5767969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//                 alt="Hardware Store Interior"
//                 className="rounded-lg shadow-xl"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Reviews Section */}
//       <section className="py-16 bg-gray-100">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <div className="flex justify-center items-center mb-4">
//               {[...Array(5)].map((_, i) => (
//                 <Star key={i} className="text-amber-500 fill-amber-500" size={24} />
//               ))}
//             </div>
//             <h2 className="text-3xl font-bold text-gray-800 mb-2">Customer Reviews</h2>
//             <p className="text-gray-600">4.7 out of 5 based on 120+ Google Reviews</p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {reviews.map((review) => (
//               <ReviewCard key={review.id} review={review} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 bg-amber-600 text-white">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
//           <p className="text-amber-100 max-w-2xl mx-auto mb-8">
//             Browse our extensive catalog of hardware products or contact us for personalized recommendations and wholesale pricing.
//           </p>
//           <div className="flex flex-wrap justify-center gap-4">
//             <Link
//               to="/products"
//               className="bg-white text-amber-600 hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-colors"
//             >
//               Browse Products
//             </Link>
//             <Link
//               to="/contact"
//               className="bg-transparent hover:bg-amber-700 text-white px-6 py-3 rounded-md font-medium border-2 border-white transition-colors"
//             >
//               Contact Us
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default HomePage;






import { ChevronRight, Clock, Star, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ProductCategory from '../components/ProductCategory';
import { categories } from '../data/products';
import ReviewCard from '../components/ReviewCard';
import { reviews } from '../data/reviews';

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <section
        className="relative h-screen bg-cover bg-center flex items-center"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/1029243/pexels-photo-1029243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-block bg-amber-600 text-white px-4 py-1 text-sm font-semibold rounded-full mb-4">
              {t('hero.established')}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/products"
                className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-md font-medium transition-colors flex items-center"
              >
                {t('hero.browseProducts')} <ChevronRight className="ml-2" size={18} />
              </Link>
              <Link
                to="/contact"
                className="bg-transparent hover:bg-white text-white hover:text-amber-600 px-6 py-3 rounded-md font-medium border-2 border-white transition-colors"
              >
                {t('hero.contactUs')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('product.title')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('product.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <ProductCategory key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">{t('services.title', 'Quality Products & Service')}</h2>
              <p className="text-gray-600 mb-6">
                {t('services.description', 'At Kalash Hardware, we pride ourselves on offering premium hardware solutions paired with exceptional customer service. Our commitment to quality and reliability has made us a trusted partner for contractors, builders, and homeowners alike.')}
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <Truck className="text-amber-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">{t('services.sameDayDelivery.title', 'Same-Day Delivery Available')}</h3>
                    <p className="text-gray-600">
                      {t('services.sameDayDelivery.description', 'For orders placed before 12 PM within Chhatrapati Sambhaji Nagar.')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <Clock className="text-amber-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">{t('services.extendedHours.title', 'Extended Business Hours')}</h3>
                    <p className="text-gray-600">
                      {t('services.extendedHours.description', 'Open daily, including Sundays to better serve our customers.')}
                    </p>
                  </div>
                </div>
              </div>

              <Link
                to="/about"
                className="inline-flex items-center text-amber-600 font-medium mt-6 hover:text-amber-700 transition-colors"
              >
                {t('services.learnMore')} <ChevronRight className="ml-1" size={18} />
              </Link>
            </div>

            <div>
              <img
                src="https://www.isixsigma.com/wp-content/uploads/2018/11/shutterstock_694457275-scaled.jpg"
                alt={t('services.imageAlt', 'Hardware Store Interior')}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex justify-center items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-amber-500 fill-amber-500" size={24} />
              ))}
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">{t('reviews.title')}</h2>
            <p className="text-gray-600">{t('reviews.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{t('cta.title', 'Ready to Start Your Project?')}</h2>
          <p className="text-amber-100 max-w-2xl mx-auto mb-8">
            {t('cta.description', 'Browse our extensive catalog of hardware products or contact us for personalized recommendations and wholesale pricing.')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/products"
              className="bg-white text-amber-600 hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-colors"
            >
              {t('cta.browseProducts')}
            </Link>
            <Link
              to="/contact"
              className="bg-transparent hover:bg-amber-700 text-white px-6 py-3 rounded-md font-medium border-2 border-white transition-colors"
            >
              {t('cta.contactUs')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
