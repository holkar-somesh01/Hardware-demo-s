import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import '../i18n';

const ContactPage = () => {
  const { t } = useTranslation()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const [errors, setErrors] = useState<Partial<typeof formData>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validate = () => {
    const newErrors: Partial<typeof formData> = {};

    if (!formData.name.trim()) {
      newErrors.name = t('errors.nameRequired');
    }

    if (!formData.email.trim()) {
      newErrors.email = t('errors.emailRequired');
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t('errors.emailInvalid');
    }

    if (!formData.message.trim()) {
      newErrors.message = t('errors.messageRequired');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      setIsSubmitting(true);

      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
      }, 1500);
    }
  };


  return (
    <div>
      <section
        className="relative py-20 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">{t('heroTitle')}</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">{t('heroSubtitle')}</p>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="bg-gray-100 p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">{t('getInTouch')}</h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="text-amber-600 mr-4 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">{t('ourLocation')}</h3>
                      <p className="text-gray-600">{t('address')}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="text-amber-600 mr-4 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">{t('phone')}</h3>
                      <p className="text-gray-600">
                        <a href="tel:+919999999999" className="hover:text-amber-600 transition-colors">
                          {t('contact.phone_number_label')}
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="text-amber-600 mr-4 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">{t('email')}</h3>
                      <p className="text-gray-600">
                        <a href="mailto:info@kalashhardware.com" className="hover:text-amber-600 transition-colors">
                          {t('contact.email_address')}
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="text-amber-600 mr-4 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">{t('businessHours')}</h3>
                      <table className="text-gray-600 text-sm">
                        <tbody>
                          <tr>
                            <td className="pr-4 py-1">{t('mondaySaturday')}</td>
                            <td>{t('mondaySaturdayHours')}</td>
                          </tr>
                          <tr>
                            <td className="pr-4 py-1">{t('sunday')}</td>
                            <td>{t('sundayHours')}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form & Map */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">{t('sendMessage')}</h2>
                {isSubmitted ? (
                  <div className="p-4 bg-green-100 text-green-700 rounded">
                    <h3 className="font-semibold mb-2">{t('thankYou')}</h3>
                    <p>{t('thankYouMessage')}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-gray-700 mb-1">
                          {t('yourName')}
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full border rounded px-3 py-2 ${errors.name ? 'border-red-500' : 'border-gray-300'
                            }`}
                          required
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-gray-700 mb-1">
                          {t('emailAddressInput')}
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full border rounded px-3 py-2 ${errors.email ? 'border-red-500' : 'border-gray-300'
                            }`}
                          required
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-gray-700 mb-1">
                          {t('phoneNumberInput')}
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full border border-gray-300 rounded px-3 py-2"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-gray-700 mb-1">
                          {t('yourMessage')}
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          className={`w-full border rounded px-3 py-2 ${errors.message ? 'border-red-500' : 'border-gray-300'
                            }`}
                          required
                        ></textarea>
                        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                      </div>
                    </div>

                    <div className="mt-6">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded shadow"
                      >
                        {isSubmitting ? t('sending') : t('send')}
                      </button>
                    </div>
                  </form>
                )}
              </div>

              {/* Google Map */}
              <div className="rounded-lg overflow-hidden shadow-md">
                <iframe
                  title="Kalash Hardware Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3830.908384899616!2d75.92726067488598!3d19.87610758709154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd7c9e83ad1022f%3A0x2aa98142670386e3!2sKalash%20Hardware!5e0!3m2!1sen!2sin!4v1683069452603!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  loading="lazy"
                  className="border-0"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;