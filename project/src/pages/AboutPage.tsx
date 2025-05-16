// import { Clock, Truck, Award, Shield } from 'lucide-react';

// const AboutPage = () => {
//   return (
//     <div>
//       {/* Hero Section */}
//       <section 
//         className="relative py-20 bg-cover bg-center"
//         style={{ backgroundImage: "url('https://images.pexels.com/photos/5691627/pexels-photo-5691627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}
//       >
//         <div className="absolute inset-0 bg-black bg-opacity-60"></div>
//         <div className="container mx-auto px-4 relative z-10 text-center">
//           <h1 className="text-4xl font-bold text-white mb-4">About Kalash Hardware</h1>
//           <p className="text-xl text-gray-200 max-w-2xl mx-auto">
//             Your trusted partner for quality hardware solutions since 2018
//           </p>
//         </div>
//       </section>

//       {/* Our Story */}
//       <section className="py-16">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
//               <p className="text-gray-600 mb-4">
//                 Founded in 2018, Kalash Hardware started as a small family business with a vision to provide high-quality hardware solutions to customers in Chhatrapati Sambhaji Nagar and surrounding areas. 
//               </p>
//               <p className="text-gray-600 mb-4">
//                 Over the years, we've grown to become one of the region's most trusted hardware wholesalers, serving contractors, builders, interior designers, and DIY enthusiasts with a wide range of brass, aluminum, sliding door, and plastic hardware products.
//               </p>
//               <p className="text-gray-600">
//                 Our commitment to quality, competitive pricing, and exceptional customer service has built our reputation as a reliable partner for all hardware needs. We take pride in our extensive product knowledge and our ability to source specialized hardware items for unique projects.
//               </p>
//             </div>
//             <div>
//               <img 
//                 src="https://images.pexels.com/photos/1797428/pexels-photo-1797428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
//                 alt="Kalash Hardware Store" 
//                 className="rounded-lg shadow-xl"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Our Values */}
//       <section className="py-16 bg-gray-100">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Values</h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               At Kalash Hardware, our business is built on a foundation of strong values that guide everything we do.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             <div className="bg-white p-6 rounded-lg shadow-md text-center">
//               <div className="bg-amber-100 text-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Award size={32} />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-800 mb-2">Quality</h3>
//               <p className="text-gray-600">
//                 We source only the finest hardware products, ensuring durability and performance.
//               </p>
//             </div>

//             <div className="bg-white p-6 rounded-lg shadow-md text-center">
//               <div className="bg-amber-100 text-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Truck size={32} />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-800 mb-2">Reliability</h3>
//               <p className="text-gray-600">
//                 Count on us for consistent stock availability and timely deliveries.
//               </p>
//             </div>

//             <div className="bg-white p-6 rounded-lg shadow-md text-center">
//               <div className="bg-amber-100 text-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Shield size={32} />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-800 mb-2">Integrity</h3>
//               <p className="text-gray-600">
//                 Honest business practices and transparent pricing in all our dealings.
//               </p>
//             </div>

//             <div className="bg-white p-6 rounded-lg shadow-md text-center">
//               <div className="bg-amber-100 text-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Clock size={32} />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-800 mb-2">Service</h3>
//               <p className="text-gray-600">
//                 Exceptional customer service and expert advice for all your hardware needs.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Mission Statement */}
//       <section className="py-16 bg-amber-600 text-white">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
//           <p className="text-xl max-w-3xl mx-auto">
//             "To provide high-quality hardware solutions that empower builders, contractors, and homeowners to complete their projects with confidence, backed by exceptional service and expert advice."
//           </p>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AboutPage;










import { Clock, Truck, Award, Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative py-20 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/5691627/pexels-photo-5691627.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">{t('about.title')}</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">{t('about.storyTitle')}</h2>
              <p className="text-gray-600 mb-4">{t('about.story1')}</p>
              <p className="text-gray-600 mb-4">{t('about.story2')}</p>
              <p className="text-gray-600">{t('about.story3')}</p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/1797428/pexels-photo-1797428.jpeg"
                alt="Kalash Hardware Store"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('about.valuesTitle')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t('about.valuesSubtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Award size={32} />, title: t('about.quality'), desc: t('about.qualityDesc') },
              { icon: <Truck size={32} />, title: t('about.reliability'), desc: t('about.reliabilityDesc') },
              { icon: <Shield size={32} />, title: t('about.integrity'), desc: t('about.integrityDesc') },
              { icon: <Clock size={32} />, title: t('about.service'), desc: t('about.serviceDesc') },
            ].map((val, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-amber-100 text-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {val.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{val.title}</h3>
                <p className="text-gray-600">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-amber-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{t('about.missionTitle')}</h2>
          <p className="text-xl max-w-3xl mx-auto">{t('about.missionText')}</p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
