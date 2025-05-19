import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import PageTransition from '../components/common/PageTransition';
import { motion } from 'framer-motion';

function Contact() {
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here would be form submission logic
    alert(t('contact.formSuccess'));
  };

  return (
    <PageTransition>
      <Helmet>
        <title>Kalash Hardware - {t('contact.title')}</title>
        <meta name="description" content={t('contact.metaDescription')} />
      </Helmet>

      <div className="bg-primary-800 text-white py-16 pt-32">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">{t('contact.title')}</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">{t('contact.subtitle')}</p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Information */}
            <motion.div
              className="w-full lg:w-1/3"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-6">{t('contact.contactInfo.title')}</h2>

              <div className="bg-white shadow-md rounded-lg p-6 mb-6">
                <div className="flex items-start mb-4">
                  <div className="bg-primary-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">{t('contact.contactInfo.addressTitle')}</h3>
                    <p className="text-neutral-600">
                      123 Hardware Street<br />
                      Tech City, TC 12345<br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start mb-4">
                  <div className="bg-primary-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">{t('contact.contactInfo.phoneTitle')}</h3>
                    <p className="text-neutral-600">+1 (555) 123-4567</p>
                    <p className="text-neutral-600">+1 (555) 987-6543</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">{t('contact.contactInfo.emailTitle')}</h3>
                    <p className="text-neutral-600">info@Kalash Hardware.com</p>
                    <p className="text-neutral-600">support@Kalash Hardware.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-white shadow-md rounded-lg p-6">
                <h3 className="font-semibold text-neutral-900 mb-4">{t('contact.contactInfo.hoursTitle')}</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-neutral-600">{t('contact.contactInfo.monday')}</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-neutral-600">{t('contact.contactInfo.tuesday')}</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-neutral-600">{t('contact.contactInfo.wednesday')}</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-neutral-600">{t('contact.contactInfo.thursday')}</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-neutral-600">{t('contact.contactInfo.friday')}</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-neutral-600">{t('contact.contactInfo.saturday')}</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-neutral-600">{t('contact.contactInfo.sunday')}</span>
                    <span className="font-medium">{t('contact.contactInfo.closed')}</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="w-full lg:w-2/3"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-6">{t('contact.form.title')}</h2>

              <div className="bg-white shadow-md rounded-lg p-6">
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-neutral-700 font-medium mb-2">
                      {t('contact.form.name')} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="email" className="block text-neutral-700 font-medium mb-2">
                      {t('contact.form.email')} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="phone" className="block text-neutral-700 font-medium mb-2">
                      {t('contact.form.phone')}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-neutral-700 font-medium mb-2">
                      {t('contact.form.subject')} *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      required
                      className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-neutral-700 font-medium mb-2">
                      {t('contact.form.message')} *
                    </label>
                    <textarea
                      id="message"
                      rows="6"
                      required
                      className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary w-full">
                    {t('contact.form.send')}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-neutral-100">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">{t('contact.location.title')}</h2>

          <div className="bg-white shadow-md rounded-lg p-4">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9028133968723!2d-73.98731532368316!3d40.748440471440014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9aeb1c6b5%3A0x35b1cfbc89a6097f!2sEmpire%20State%20Building%2C%20New%20York%2C%20NY%2010001%2C%20USA!5e0!3m2!1sen!2sin!4v1663234241539!5m2!1sen!2sin"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15288.282213816715!2d75.3339177!3d19.8741423!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdbf011d9c6f5f5%3A0x0!2zMTnCsDUyJzE2LjAiTiA3NcKwMjAnMjUuOCJF!5e0!3m2!1sen!2sin!4v1684548145000!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Store Location"
                className="rounded-lg w-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

export default Contact;