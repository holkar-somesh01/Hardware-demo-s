import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import PageTransition from '../components/common/PageTransition';
import HeroSection from '../components/home/HeroSection';
import FeaturedProducts from '../components/home/FeaturedProducts';
import CategorySection from '../components/home/CategorySection';
import TestimonialSection from '../components/home/TestimonialSection';

function Home() {
  const { t } = useTranslation();

  return (
    <PageTransition>
      <Helmet>
        <title>Kalash Hardware - {t('home.title')}</title>
        <meta name="description" content={t('home.metaDescription')} />
      </Helmet>

      <HeroSection />
      <FeaturedProducts />
      <CategorySection />
      <TestimonialSection />

      {/* Call to Action Section */}
      <section className="bg-primary-800 text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('home.cta.title')}</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">{t('home.cta.subtitle')}</p>
          <a href="/contact" className="btn bg-accent-500 hover:bg-accent-600 text-white">
            {t('home.cta.button')}
          </a>
        </div>
      </section>
    </PageTransition>
  );
}

export default Home;